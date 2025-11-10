import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full bg-[var(--color-neutral-light)] shadow-sm">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-[var(--color-primary)]">
          Roast<span className="text-[var(--color-accent)]">Haven</span>
        </h1>

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  );
}
