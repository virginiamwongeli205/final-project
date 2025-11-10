export default function Navigation() {
  const links = ["Home", "Menu", "About", "Contact"];

  return (
    <nav>
      <ul className="hidden md:flex items-center gap-8 text-[var(--color-neutral-dark)] font-medium">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav placeholder for later */}
      <div className="md:hidden">
        <button aria-label="Open Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
