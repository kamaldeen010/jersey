export default function FormContainer({ title, onSubmit, children }) {
  return (
    <div className="w-full max-w-md mx-auto bg-[var(--card)] border border-[var(--card-border)] p-6 md:p-8 rounded-sm shadow-sm">
      {title && (
        <h2 className="text-xl font-black uppercase tracking-tight text-[var(--foreground)] mb-6 text-center">
          {title}
        </h2>
      )}
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  );
}