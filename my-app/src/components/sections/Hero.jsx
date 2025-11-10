export default function Hero() {
  return (
    <section
      className="w-full bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-no-repeat py-32 md:py-40 relative"
    >
      {/* --- Overlay --- */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-white leading-tight drop-shadow-lg">
          Discover the Art of <br /> Perfect Coffee at{" "}
          <span className="text-[var(--color-accent)]">Roast Haven</span>
        </h1>

        <p className="mt-6 text-lg text-white/90 max-w-md">
          From single-origin brews to creamy lattes, experience flavors crafted
          with passion and precision — one cup at a time.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <button className="button-primary">Shop Now</button>
          <button className="button-outline text-white border-white hover:bg-white/10">
            Our Menu
          </button>
        </div>
      </div>
    </section>
  );
}
