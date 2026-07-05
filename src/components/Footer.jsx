import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111115] text-[var(--foreground)] border-t border-[var(--card-border)] pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        
        {/* Grid resized from md:grid-cols-4 to md:grid-cols-3 for balanced layout spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-neutral-900">
          
          <div className="md:col-span-1">
            <h4 className="text-[11px] font-black tracking-widest uppercase text-[var(--foreground)] mb-2">
              CRZJERSEYS
            </h4>
            <p className="text-[9px] font-medium tracking-wider text-neutral-500 uppercase leading-relaxed max-w-[200px]">
              Premium authentic kit hub. Engineered for optimal performance and unmatched style.
            </p>
          </div>

          <div>
            <h5 className="text-[9px] font-black tracking-widest uppercase text-neutral-400 mb-3">
              NAVIGATION
            </h5>
            <ul className="space-y-2 text-[10px] font-bold tracking-wider uppercase">
              <li>
                <Link to="/" className="text-neutral-500 hover:text-[var(--accent)] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-neutral-500 hover:text-[var(--accent)] transition-colors">Shop Vault</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-500 hover:text-[var(--accent)] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-500 hover:text-[var(--accent)] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[9px] font-black tracking-widest uppercase text-neutral-400 mb-3">
              ASSISTANCE
            </h5>
            <ul className="space-y-2 text-[10px] font-bold tracking-wider uppercase">
              <li>
                <Link to="/terms" className="text-neutral-500 hover:text-[var(--accent)] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-500 hover:text-[var(--accent)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] font-bold tracking-widest text-neutral-600 uppercase">
          <div>
            ©️ 2026 CRZJERSEYS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>NIGERIA / GLOBAL OUTLET</span>
            <Link 
              to="/admin-logs" 
              className="text-neutral-950 hover:text-neutral-800 transition-colors select-none text-[8px]"
            >
              LOGS
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}