import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ cartCount, searchQuery, setSearchQuery }) {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const gateRef = useRef(null);
  const hamburgerRef = useRef(null);
  
  const [showGate, setShowGate] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const handleGateSubmit = (e) => {
    e.preventDefault();
    if (passcode === '221122') {
      setShowGate(false);
      setPasscode('');
      setError(false);
      navigate('/admin-logs');
    } else {
      setError(true);
      setPasscode('');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (window.location.pathname !== '/shop') {
      navigate('/shop');
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
      if (gateRef.current && !gateRef.current.contains(event.target)) {
        setShowGate(false);
        setError(false);
        setPasscode('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full h-16 border-b border-[var(--card-border)]  bg-[var(--background)] px-4 md:px-8 flex items-center justify-between fixed top-0 z-20000 transition-colors duration-300 ease-in-out">
      <div className="flex items-center gap-8 flex-1">
        <button 
          ref={hamburgerRef}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer shadow-none outline-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link to="/" className="text-sm font-black uppercase tracking-widest text-[var(--foreground)] shrink-0">
          DELUXEJERSEY
        </Link>
        
        {!showSearchInput && (
          <div className="hidden md:flex items-center gap-6 text-[11px] uppercase font-bold tracking-widest text-neutral-500 transition-all duration-200">
            <Link to="/" className="hover:text-[var(--foreground)]">Home</Link>
            <Link to="/shop" className="hover:text-[var(--foreground)]">Shop</Link>
            <Link to="/about" className="hover:text-[var(--foreground)]">About</Link>
            <Link to="/contact" className="hover:text-[var(--foreground)]">Contact</Link>
          </div>
        )}

        {showSearchInput && (
          <div className="hidden md:flex items-center flex-1 max-w-md animate-fadeIn">
            <input 
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="SEARCH VAULT KITS..."
              className="w-full bg-neutral-900/60 border border-[var(--card-border)] text-[10px] tracking-widest font-black px-4 py-2 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)]"
              autoFocus
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 text-[var(--foreground)] shrink-0">
        <div className="md:hidden flex items-center">
          {showSearchInput && (
            <input 
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="SEARCH KITS..."
              className="w-28 sm:w-40 bg-neutral-900/60 border border-[var(--card-border)] text-[9px] tracking-widest font-black px-2 py-1.5 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)] mr-1"
              autoFocus
            />
          )}
        </div>

        <button 
          onClick={() => setShowSearchInput(!showSearchInput)}
          className={`p-2 transition-all duration-200 cursor-pointer ${showSearchInput ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button 
          onClick={() => setShowGate(true)}
          className="p-2 hover:text-[var(--accent)] transition-all duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>

        <Link to="/checkout" className="relative p-2 hover:text-[var(--accent)] transition-all duration-200 block cursor-pointer">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-[var(--accent)] text-white font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        <div className="pl-2 border-l border-[var(--card-border)]">
          <ThemeToggle />
        </div>
      </div>

      {showMobileMenu && (
        <div 
          ref={dropdownRef}
          className="absolute top-16 left-0 w-full bg-[var(--card)] border-b border-[var(--card-border)] p-4 md:hidden z-50 shadow-xl"
        >
          <div className="grid grid-cols-2 gap-3 text-center text-[10px] font-black uppercase tracking-widest">
            <Link to="/" onClick={() => setShowMobileMenu(false)} className="p-3 border border-[var(--card-border)] bg-[var(--background)] rounded-sm text-[var(--foreground)] hover:border-[var(--accent)]">Home</Link>
            <Link to="/shop" onClick={() => setShowMobileMenu(false)} className="p-3 border border-[var(--card-border)] bg-[var(--background)] rounded-sm text-[var(--foreground)] hover:border-[var(--accent)]">Shop</Link>
            <Link to="/about" onClick={() => setShowMobileMenu(false)} className="p-3 border border-[var(--card-border)] bg-[var(--background)] rounded-sm text-[var(--foreground)] hover:border-[var(--accent)]">About</Link>
            <Link to="/contact" onClick={() => setShowMobileMenu(false)} className="p-3 border border-[var(--card-border)] bg-[var(--background)] rounded-sm text-[var(--foreground)] hover:border-[var(--accent)]">Contact</Link>
          </div>
        </div>
      )}

      {showGate && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div ref={gateRef} className="bg-[var(--card)] border border-[var(--card-border)] p-6 w-full max-w-xs rounded-sm shadow-2xl">
            <h3 className="text-[11px] font-black tracking-widest text-neutral-400 uppercase mb-4 text-center">PARTNER VAULT ACCESS</h3>
            <form onSubmit={handleGateSubmit} className="flex flex-col gap-3">
              <input
                type="password"
                maxLength={6}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value.replace(/\D/g, ''))}
                placeholder="••••••"
                className="w-full text-center bg-neutral-900 border border-[var(--card-border)] text-sm tracking-widest font-black p-3 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)]"
                autoFocus
              />
              {error && <p className="text-[9px] text-red-500 font-bold tracking-wide text-center uppercase">Invalid Security Credentials</p>}
              <div className="flex gap-2 mt-2">
                <button type="button" onClick={() => { setShowGate(false); setError(false); setPasscode(''); }} className="w-1/2 bg-neutral-800 text-neutral-400 text-[10px] font-black tracking-widest uppercase py-2.5 rounded-sm">Abort</button>
                <button type="submit" className="w-1/2 bg-[var(--accent)] text-white text-[10px] font-black tracking-widest uppercase py-2.5 rounded-sm">Verify</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}