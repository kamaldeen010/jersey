import FormContainer from '../components/FormContainer';

export default function Contact() {
  const handleSendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs text-[var(--accent)] font-bold uppercase tracking-widest">Get In Touch</p>
          <h1 className="text-3xl font-black uppercase tracking-tight text-[var(--foreground)]">
            Connect With The Kit Vendor
          </h1>
        </div>
        
        <p className="text-sm text-neutral-500 leading-relaxed">
          Have inquiries regarding custom printing, player patch options, size measurements, or wholesale team ordering batches? Drop your message or reach out via our direct service channels.
        </p>

        <div className="space-y-4 pt-4 border-t border-[var(--card-border)] text-xs uppercase tracking-wider font-medium text-[var(--foreground)]">
          <div>
            <span className="text-neutral-500 block text-[10px] tracking-widest font-bold mb-1">HQ Distribution Hub</span>
            ABUJA, Nigeria
          </div>
          <div>
            <span className="text-neutral-500 block text-[10px] tracking-widest font-bold mb-1">Direct Support Email</span>
            koredex001@gmail.com
          </div>
        </div>
      </div>

      <div>
        <FormContainer title="Send Message" onSubmit={handleSendMessage}>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full h-11 px-3 border border-[var(--card-border)] bg-[var(--background)] text-sm text-[var(--foreground)] uppercase"
              placeholder="e.g. John Doe"
              required 
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full h-11 px-3 border border-[var(--card-border)] bg-[var(--background)] text-sm text-[var(--foreground)]"
              placeholder="e.g. johndoe@gmail.com"
              required 
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">Message Detail</label>
            <textarea 
              rows="4" 
              className="w-full p-3 border border-[var(--card-border)] bg-[var(--background)] text-sm text-[var(--foreground)] uppercase resize-none"
              placeholder="Specify kit sizes or batch order questions..."
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full h-12 bg-[#0d0d0d] text-white text-xs font-bold uppercase tracking-wider border border-neutral-800 transition-transform active:scale-[0.98] cursor-pointer"
          >
            Dispatch Message
          </button>
        </FormContainer>
      </div>
    </div>
  );
}