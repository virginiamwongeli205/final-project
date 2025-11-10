export default function About() {
  return (
    <section className="w-full bg-[var(--color-neutral-light)] py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        {/* --- Left: Image --- */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80"
            alt="Barista pouring latte art"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* --- Right: Content --- */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)]">
            Brewing Stories Since 2015
          </h2>

          <p className="mt-6 text-[var(--color-neutral-dark)]/80 leading-relaxed">
            At <span className="text-[var(--color-accent)] font-semibold">Roast Haven</span>, every cup tells a story.
            From ethically sourced beans to carefully crafted brews, our passion
            lies in creating unforgettable coffee experiences for our community.
          </p>

          <p className="mt-4 text-[var(--color-neutral-dark)]/80 leading-relaxed">
            Whether you’re a casual sipper or a coffee connoisseur, our goal is
            simple — to make your daily brew something worth savoring.
          </p>

          <div className="mt-8">
            <button className="button-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
