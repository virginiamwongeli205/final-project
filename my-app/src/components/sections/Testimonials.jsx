export default function Testimonials() {
    const testimonials = [
        {
            name: "Sophia Miller",
            role: "Coffee Enthusiast",
            quote:
                "Roast Haven has completely changed how I start my mornings. Their espresso is perfection — strong, smooth, and full of life.",
            image:
                "https://images.unsplash.com/photo-1742482805774-215f6f88509c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGljJTIwb2YlMjBhJTIwY29mZmUlMjBsYWR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
        },
        {
            name: "James Parker",
            role: "Freelance Designer",
            quote:
                "I love spending hours at Roast Haven. The ambiance, aroma, and taste — it’s the ultimate creative fuel for me.",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "Amira Khan",
            role: "Food Blogger",
            quote:
                "Their cold brew is unlike anything I’ve tasted before. You can tell how much care goes into every cup.",
            image:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        },
    ];

    return (
        <section className="w-full bg-[var(--color-neutral-light)] py-20">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                {/* --- Section Header --- */}
                <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)]">
                    What Our Customers Say
                </h2>
                <p className="mt-4 text-[var(--color-neutral-dark)]/80 max-w-2xl mx-auto">
                    Real stories from our amazing community — brewed with love, shared
                    over coffee.
                </p>

                {/* --- Testimonials Grid --- */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-left"
                        >
                            <p className="text-[var(--color-neutral-dark)]/90 italic">
                                “{t.quote}”
                            </p>

                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-primary)]">
                                        {t.name}
                                    </h4>
                                    <p className="text-sm text-[var(--color-neutral-dark)]/70">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
