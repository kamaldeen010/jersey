import { useState } from 'react';

export default function Checkout({ cart = [], onUpdateQuantity, onRemoveItem }) {
  
  const baseJerseySubtotal = cart.reduce((acc, item) => {
    const itemQty = item.quantity || 1;
    const baseUnitPrice = item.isCustomized ? item.price - 4000 : item.price;
    return acc + (baseUnitPrice * itemQty);
  }, 0);

  const totalCustomizationFees = cart.reduce((acc, item) => {
    const itemQty = item.quantity || 1;
    return acc + (item.isCustomized ? 4000 * itemQty : 0);
  }, 0);

  const subtotal = baseJerseySubtotal + totalCustomizationFees;

  const handleWhatsAppRedirect = () => {
    if (cart.length === 0) {
      alert('Operational Error: Your deployment cart payload is currently empty.');
      return;
    }

    const whatsappNumber = "2349069037338"; 

    let message = `🚀 *NEW ORDER*\n`;
    message += `=============================\n\n`;

    cart.forEach((item, index) => {
      const itemQty = item.quantity || 1;
      const baseUnitPrice = item.isCustomized ? item.price - 4000 : item.price;
      
      message += `*${index + 1}. ${item.name}*\n`;
      message += `   • Base Price: ₦${baseUnitPrice.toLocaleString()} each\n`;
      if (item.isCustomized) {
        message += `   • Customization: +₦4,000\n`;
        if (item.customName) message += `     - Identity Name: ${item.customName}\n`;
        if (item.customNumber) message += `     - Call Sign #: ${item.customNumber}\n`;
      }
      message += `   • Qty: ${itemQty}\n`;
      if (item.image) {
        message += `   • Preview: ${item.image}\n`;
      }
      message += `   • Line Total: ₦${(item.price * itemQty).toLocaleString()}\n\n`;
    });

    message += `=============================\n`;
    message += `👕 *BASE ITEMS TOTAL:* ₦${baseJerseySubtotal.toLocaleString()}\n`;
    if (totalCustomizationFees > 0) {
      message += `🎨 *CUSTOM PRINT FEES:* ₦${totalCustomizationFees.toLocaleString()}\n`;
    }
    message += `💰 *TOTAL MANIFEST VALUE:* ₦${subtotal.toLocaleString()}\n`;
    message += `Please confirm availability and transmit dropzone allocation instructions!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const safeUpdateQuantity = (item, newQty) => {
    if (onUpdateQuantity) {
      onUpdateQuantity(item.id, item.selectedSize, newQty);
    } else {
      item.quantity = newQty;
    }
  };

  const safeRemoveItem = (item) => {
    if (onRemoveItem) {
      onRemoveItem(item.id, item.selectedSize);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="border-b border-[var(--card-border)] pb-6">
        <span className="text-[9px] font-black uppercase tracking-widest text-[var(--accent)] bg-neutral-950 px-2 py-1 border border-[var(--card-border)] rounded-sm">
          WhatsApp Secure Pipeline
        </span>
        <h1 className="text-2xl font-black uppercase tracking-tight text-[var(--foreground)] mt-3">
          Review Order Manifest
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-8 bg-[var(--card)] border border-[var(--card-border)] p-6 rounded-sm space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400 border-b border-[var(--card-border)] pb-2">
            Manifest Inventory Ledger ({cart.length})
          </h3>

          {cart.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[var(--card-border)] rounded-sm">
              <p className="text-[10px] text-neutral-500 font-black uppercase tracking-wider">
                No Line Items Registered in Pipeline
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[var(--card-border)] space-y-4">
              {cart.map((item, index) => {
                const itemQty = item.quantity || 1;
                return (
                  <div key={`${item.id}-${item.selectedSize}-${index}`} className="flex flex-col sm:flex-row gap-4 pt-4 first:pt-0 items-start sm:items-center justify-between">
                    
                    <div className="flex gap-4 items-center w-full sm:w-auto">
                      <div className="w-16 h-16 bg-neutral-950 border border-[var(--card-border)] rounded-sm p-1 overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-black uppercase tracking-tight text-[var(--foreground)] truncate">{item.name}</h4>
                        <p className="text-[9px] text-neutral-400 font-bold tracking-widest uppercase mt-0.5">
                          Matrix: <span className="text-[var(--accent)]">{item.selectedSize || 'N/A'}</span>
                        </p>
                        {item.isCustomized && (
                          <div className="mt-1 bg-neutral-950 px-1.5 py-0.5 border border-[var(--card-border)] rounded-xs inline-flex flex-col gap-0.5 text-[8px] font-black tracking-widest uppercase text-neutral-400">
                            <span className="text-[var(--accent)]">+ CUSTOM PRINT FEE ADDED</span>
                            <div className="flex gap-2">
                              {item.customName && <span>ID: {item.customName}</span>}
                              {item.customNumber && <span>#: {item.customNumber}</span>}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-[var(--card-border)]">
                      <div className="flex items-center bg-neutral-950 border border-[var(--card-border)] rounded-sm h-8 px-1">
                        <button 
                          type="button"
                          onClick={() => itemQty > 1 ? safeUpdateQuantity(item, itemQty - 1) : safeRemoveItem(item)}
                          className="w-6 h-full flex items-center justify-center text-xs text-neutral-400 hover:text-white font-black cursor-pointer select-none"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-[10px] font-black text-[var(--foreground)]">
                          {itemQty}
                        </span>
                        <button 
                          type="button"
                          onClick={() => safeUpdateQuantity(item, itemQty + 1)}
                          className="w-6 h-full flex items-center justify-center text-xs text-neutral-400 hover:text-white font-black cursor-pointer select-none"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right min-w-[80px]">
                        <span className="text-xs font-black text-[var(--foreground)] block">
                          ₦{(item.price * itemQty).toLocaleString()}
                        </span>
                      </div>

                      <button 
                        type="button"
                        onClick={() => safeRemoveItem(item)}
                        className="p-1 text-neutral-500 hover:text-[var(--accent)] transition-colors cursor-pointer"
                        title="Purge Item From Matrix"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="lg:col-span-4 bg-[var(--card)] border border-[var(--card-border)] p-6 rounded-sm space-y-6 lg:sticky top-24">
          <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400 border-b border-[var(--card-border)] pb-2">
            Execution Ledger
          </h3>

          <div className="space-y-3 text-[10px] uppercase font-bold tracking-wider">
            <div className="flex justify-between text-neutral-400">
              <span>Item Units Registered</span>
              <span className="font-black text-[var(--foreground)]">
                {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
              </span>
            </div>

            <div className="flex justify-between text-neutral-400 pt-1">
              <span>Base Jerseys Total</span>
              <span className="font-black text-[var(--foreground)]">
                ₦{baseJerseySubtotal.toLocaleString()}
              </span>
            </div>

            {totalCustomizationFees > 0 && (
              <div className="flex justify-between text-neutral-400 pt-1">
                <span>Customization Add-ons</span>
                <span className="font-black text-[var(--accent)]">
                  + ₦{totalCustomizationFees.toLocaleString()}
                </span>
              </div>
            )}
            
            <div className="flex justify-between items-baseline pt-4 border-t border-[var(--card-border)] text-sm font-black text-[var(--foreground)]">
              <span className="text-xs tracking-widest text-neutral-400">TOTAL PAYLOAD</span>
              <span className="text-base text-[var(--foreground)]">₦{subtotal.toLocaleString()}</span>
            </div>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              disabled={cart.length === 0}
              className="w-full bg-[var(--foreground)] text-[var(--background)] text-xs font-black tracking-widest uppercase py-4 rounded-sm cursor-pointer hover:bg-neutral-200 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.946 0c3.173.001 6.154 1.24 8.39 3.482 2.237 2.241 3.466 5.22 3.464 8.39-.004 6.598-5.34 11.946-11.89 11.946-.003 0-.005 0-.008 0-1.997-.001-3.956-.5-5.697-1.448L0 24zm6.59-4.859c1.72.101 2.382.204 4.4-.3 2.51-.624 4.393-1.983 5.69-4.143 1.135-1.892 1.393-3.61 1.393-5.753-.002-4.119-3.235-7.465-7.182-7.465-3.96 0-7.186 3.348-7.186 7.467 0 2.229.743 4.024 2.206 5.462l-.438 2.628 2.117-.396z"/>
              </svg>
              Transmit Order Payload
            </button>

            <p className="text-[9px] text-center text-neutral-500 font-bold uppercase tracking-wider leading-normal border border-dashed border-[var(--card-border)] bg-neutral-950/20 p-2 rounded-sm">
              ⚠️ Delivery fee will be discussed with rider depending on location
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}