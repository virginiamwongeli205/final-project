export default function Card({ image, title, description, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
        loading="lazy"
      />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-neutral-dark)]/80 line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-[var(--color-accent)]">{price}</span>
          <button className="button-primary text-sm px-3 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
