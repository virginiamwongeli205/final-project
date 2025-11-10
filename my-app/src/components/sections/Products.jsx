import Card from "../common/Card";

export default function Products() {
  const products = [
    {
      title: "Classic Espresso",
      description: "Pure intensity in every sip — rich crema and bold aroma.",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Caramel Latte",
      description: "A smooth espresso layered with caramel and steamed milk.",
      price: "$5.25",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Iced Mocha",
      description: "Chocolate and coffee meet in this refreshing cold blend.",
      price: "$5.75",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Vanilla Cold Brew",
      description: "Slow-brewed coffee with creamy vanilla sweetness.",
      price: "$5.50",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="w-full bg-[var(--color-neutral-light)] py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)]">
          Featured Brews
        </h2>
        <p className="mt-4 text-[var(--color-neutral-dark)]/80 max-w-2xl mx-auto">
          Explore our best-selling drinks — handcrafted with love, roasted to
          perfection, and brewed for your moment.
        </p>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
