export default function Categories() {
    const categories = [
        {
            name: "Espresso",
            description: "Bold, rich, and perfectly balanced — the foundation of great coffee.",
            image:
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Cappuccino",
            description:
                "A smooth blend of espresso, steamed milk, and velvety foam.",
            image:
                "https://images.unsplash.com/photo-1620052087057-bfd8235f5874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwcHVjaW5vfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
        },
        {
            name: "Latte",
            description:
                "Creamy and comforting — your daily dose of happiness.",
            image:
                "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
        },
        {
            name: "Cold Brew",
            description: "Smooth, slow-steeped, and refreshingly bold for warm days.",
            image:
                "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
        },
    ];

    return (
        <section className="w-full bg-[var(--color-neutral-light)] py-20">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                {/* --- Section Header --- */}
                <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)]">
                    Our Coffee Categories
                </h2>
                <p className="mt-4 text-[var(--color-neutral-dark)]/80 max-w-2xl mx-auto">
                    Explore the flavors that define Roast Haven — crafted for every mood
                    and every moment.
                </p>

                {/* --- Category Grid --- */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <div
                            key={cat.name}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                                    {cat.name}
                                </h3>
                                <p className="mt-2 text-sm text-[var(--color-neutral-dark)]/80">
                                    {cat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
