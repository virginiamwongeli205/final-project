export default function Story() {
  return (
    <section className="w-full bg-[var(--color-neutral-light)] py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        {/* --- Left: Text --- */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)]">
            The Roast Haven Story
          </h2>

          <p className="mt-6 text-[var(--color-neutral-dark)]/80 leading-relaxed">
            What started as a small corner café in 2015 has grown into a
            community of coffee lovers united by passion and craftsmanship. At{" "}
            <span className="text-[var(--color-accent)] font-semibold">
              Roast Haven
            </span>
            , we don’t just serve coffee — we share a moment, a story, and a
            connection in every cup.
          </p>

          <p className="mt-4 text-[var(--color-neutral-dark)]/80 leading-relaxed">
            Our beans are ethically sourced from sustainable farms, roasted to
            perfection, and brewed with care to create flavors that bring people
            together.
          </p>

          <div className="mt-8">
            <button className="button-outline">Meet Our Baristas</button>
          </div>
        </div>

        {/* --- Right: Image --- */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1717231365159-fcb621e52766?auto=format&fit=crop&q=60&w=600"
            alt="Barista team at Roast Haven"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
