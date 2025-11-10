export default function Stats() {
  return (
    <section className="w-full bg-[var(--color-primary)] text-[var(--color-neutral-light)] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8 px-6">
        {/* Stat 1 */}
        <div>
          <h3 className="text-4xl font-bold font-[var(--font-heading)]">
            10<span className="text-[var(--color-accent)]">+</span>
          </h3>
          <p className="mt-2 text-sm uppercase tracking-wide opacity-90">
            Years of Craft
          </p>
        </div>

        {/* Stat 2 */}
        <div>
          <h3 className="text-4xl font-bold font-[var(--font-heading)]">
            25<span className="text-[var(--color-accent)]">+</span>
          </h3>
          <p className="mt-2 text-sm uppercase tracking-wide opacity-90">
            Countries Served
          </p>
        </div>

        {/* Stat 3 */}
        <div>
          <h3 className="text-4xl font-bold font-[var(--font-heading)]">
            50k<span className="text-[var(--color-accent)]">+</span>
          </h3>
          <p className="mt-2 text-sm uppercase tracking-wide opacity-90">
            Happy Customers
          </p>
        </div>

        {/* Stat 4 */}
        <div>
          <h3 className="text-4xl font-bold font-[var(--font-heading)]">
            200<span className="text-[var(--color-accent)]">+</span>
          </h3>
          <p className="mt-2 text-sm uppercase tracking-wide opacity-90">
            Signature Blends
          </p>
        </div>
      </div>
    </section>
  );
}
