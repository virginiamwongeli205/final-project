export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-neutral-dark)] text-[var(--color-neutral-light)] py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* --- Brand / About --- */}
        <div>
          <h3 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-accent)]">
            Roast Haven
          </h3>
          <p className="mt-4 text-sm text-[var(--color-neutral-light)]/80">
            Brewing connection, community, and comfort — one cup at a time.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-neutral-light)]/80">
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* --- Support --- */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-neutral-light)]/80">
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* --- Contact / Social --- */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-neutral-light)]/80">
            <li>hello@roasthaven.com</li>
            <li>+254712345678</li>
            <li>Nairobi, Kenya</li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">
              <i className="ri-instagram-line text-xl"></i>
            </a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">
              <i className="ri-facebook-circle-line text-xl"></i>
            </a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">
              <i className="ri-twitter-x-line text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 border-t border-[var(--color-neutral-light)]/20 pt-6 text-sm text-[var(--color-neutral-light)]/60">
        © {new Date().getFullYear()} Roast Haven. All rights reserved.
      </div>
    </footer>
  );
}
``
