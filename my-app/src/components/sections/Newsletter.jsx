export default function Newsletter() {
  return (
    <section className="w-full bg-[var(--color-primary)] py-20 text-[var(--color-neutral-light)]">
      <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* --- Headline --- */}
        <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold">
          Join the Roast Haven Circle
        </h2>

        <p className="mt-4 max-w-xl text-[var(--color-neutral-light)]/90">
          Get exclusive access to limited brews, events, and special offers —
          straight to your inbox.
        </p>

        {/* --- Form --- */}
        <form className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-full text-[var(--color-neutral-dark)] w-full sm:w-80 focus:outline-none"
            required
          />
          <button type="submit" className="button-accent">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
