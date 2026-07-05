import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-[var(--foreground)] min-h-screen tracking-wide text-xs space-y-8">
      <h1 className="text-sm font-black uppercase tracking-widest border-b border-[var(--card-border)] pb-4">
        PRIVACY POLICY
      </h1>
      
      <div className="space-y-6 text-neutral-400 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            1. PERSONAL DATA WE COLLECT
          </h2>
          <p>
            WHEN YOU ACCESS THE CRZJERSEYS DEPLOYMENT TERMINAL, WE DO NOT FORCE AN ACCOUNT REGISTRATION OR STORE PASSWORDS. THE TEMPORARY CUSTOMIZATION TEXT AND SELECTIONS YOU INPUT ARE PROCESSED SOLELY WITHIN YOUR BROWSER SESSION TO COMPILE A CLEAN ORDER SUMMARY SENT DIRECTLY TO US VIA WHATSAPP.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            2. THIRD-PARTY REDIRECTION & INTEGRATION
          </h2>
          <p>
            ONCE YOU CLICK TO FINALIZE YOUR COMMERCE PIPELINE, YOU TRANSLATE TO THE WHATSAPP PLATFORM. INDEPENDENT INTERACTIONS, CHAT HISTORIES, PHONE NUMBERS, AND FINANCIAL TRANSACTIONS SHARED ON WHATSAPP ARE DIRECTLY SUBJECT TO THE PRIVACY INFRASTRUCTURE AND TERMS OUTLINED BY META PLATFORMS INC. WE DO NOT EXPOSE YOUR UTTERANCES OR CHAT INFORMATION TO SECONDARY DATA AGGREGATORS.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            3. COOKIES AND SESSION CACHING
          </h2>
          <p>
            WE UTILIZE TRANSIENT BROWSER STATE ARCHITECTURES (LOCAL STORAGE) EXCLUSIVELY TO RETAIN ITEMS SAVED IN YOUR SHOPPING CART AND MAINTAIN ACTIVE DISPLAY STYLES (THEME CHOICES). THESE STATE CONTROLS DO NOT TRACK TRACKING TARGETS ON SECONDFORM DOMAINS.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-black text-[var(--foreground)] uppercase text-[11px] tracking-wider">
            4. SECURITY PROTOCOLS
          </h2>
          <p>
            TO PROTECT YOUR DIGITAL PROFILE STANDARDS, WE MAINTAIN DEPLOYMENT CHANNELS UTILIZING SECURE SOCKET LAYER TECHNOLOGY (SSL/HTTPS). SINCE DATA PROCESSING OCCURS DIRECTLY BETWEEN YOUR LOCAL MACHINE ENVIRONMENT AND OUR SECURE OPERATOR LINK, NO MIDDLEWARE LEDGERS GAIN INSIGHT INTO CUSTOM DETAILS.
          </p>
        </section>
      </div>
    </div>
  );
}