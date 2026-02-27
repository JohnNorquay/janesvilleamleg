import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-legion-dark text-white">
      {/* Veterans Crisis Line banner */}
      <div className="bg-legion-red">
        <div className="mx-auto max-w-6xl px-4 py-3 text-center">
          <p className="text-sm font-medium">
            Veterans Crisis Line:{" "}
            <a href="tel:988" className="font-bold underline">
              Dial 988
            </a>{" "}
            then press 1 &bull; Text{" "}
            <span className="font-bold">838255</span> &bull;{" "}
            <a
              href="https://www.veteranscrisisline.net/get-help-now/chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              Chat Online
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Post info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Post 205</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Richard Ellis American Legion Post 205
              <br />
              Janesville, Wisconsin
            </p>
            <p className="text-white/70 text-sm mt-3">
              Named in honor of Richard Ellis, the first Janesville casualty of
              World War I.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Our Post" },
                { href: "/events", label: "Events Calendar" },
                { href: "/membership", label: "Join Post 205" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-3">Connect With Us</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="mailto:richardellis.post205@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  richardellis.post205@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/RichardEllispost205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.legion.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  The American Legion (National)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Richard Ellis American Legion Post
            205. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
