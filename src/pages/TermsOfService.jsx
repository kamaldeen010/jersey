import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-[var(--foreground)] min-h-screen tracking-wide text-xs space-y-8">
      <h1 className="text-sm font-black uppercase tracking-widest border-b border-[var(--card-border)] pb-4">
        TERMS OF SERVICE
      </h1>
      
      <div className="space-y-6 text-neutral-400 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            1. OVERVIEW AND ACCEPTANCE
          </h2>
          <p>
            THIS WEBSITE IS OPERATED BY CRZJERSEYS. THROUGHOUT THE SITE, THE TERMS "WE", "US" AND "OUR" REFER TO CRZJERSEYS. BY VISITING OUR SITE AND/OR PURCHASING SOMETHING FROM US, YOU ENGAGE IN OUR "SERVICE" AND AGREE TO BE BOUND BY THE FOLLOWING TERMS AND CONDITIONS.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            2. WHATSAPP ORDERING & TRANSACTION COMPLIANCE
          </h2>
          <p>
            OUR SHOP UTILIZES A DIRECT-TO-VENDOR COMMERCE MODEL via WHATSAPP. PLACING AN ITEM IN YOUR CART AND SUBMITTING AN ORDER INITIATES A CHAT ROUTE TO OUR ACCREDITED REPRESENTATIVE. NO PAYMENT IS PROCESSED AUTOMATICALLY ON THIS WEBSITE. ORDERS ARE CONCLUDED, INVOICED, AND CONFIRMED EXCLUSIVELY WITHIN THE WHATSAPP CHAT UPON MUTUAL AGREEMENT AND VALIDATION OF FUNDS.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            3. CUSTOMIZATION AND PRINTING POLICY
          </h2>
          <p>
            WE OFFER CUSTOM NAME AND NUMBER PRINTING ON SELECT KITS FOR AN ADDED FIXED FEE. IT IS THE SOLE RESPONSIBILITY OF THE CUSTOMER TO VERIFY SPELING, TYPOGRAPHY, AND NUMBER SPECIFICATIONS BEFORE REDIRECTING TO WHATSAPP. BECAUSE CUSTOMIZED KITS ARE TAILORED UNIQUELY TO YOUR ORDER, THEY ARE COMPLETELY EXCLUDED FROM STANDARD REFUNDS, EXCHANGES, OR ALTERATIONS ONCE PRODUCTION COMMENCES.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            4. PRICING AND AVAILABILITY
          </h2>
          <p>
            PRICES FOR OUR PRODUCTS ARE SUBJECT TO CHANGE WITHOUT NOTICE. WHILE WE STRIVE FOR ABSOLUTE ACCURACY, OCCASIONAL INVENTORY SYNC DELAYS MAY OCCUR. WE RESERVE THE RIGHT TO LIMIT QUANTITIES OR DECLINE SERVICE IF A PRODUCT LISTING CONTAINS AN ERROR IN PRICING OR INVENTORY STATUS AT THE TIME OF YOUR WHATSAPP DIRECT INQUIRY.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            5. GOVERNING LAW
          </h2>
          <p>
            THESE TERMS OF SERVICE AND ANY SEPARATE AGREEMENTS WHEREBY WE PROVIDE YOU SERVICES SHALL BE GOVERNED BY AND CONSTRUED IN ACCORDANCE WITH THE LAWS REGULATING COMMERCE WITHIN NIGERIA.
          </p>
        </section>
      </div>
    </div>
  );
}