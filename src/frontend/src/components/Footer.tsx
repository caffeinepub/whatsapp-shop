import { Mail, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="text-white" style={{ backgroundColor: "#1F2B45" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="w-2 h-2 rounded-full bg-blue-300" />
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="w-2 h-2 rounded-full bg-pink-400" />
              </div>
              <span className="text-xl font-bold">
                UNIQO <span className="text-yellow-400">BD</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Your unique fashion destination in Bangladesh. Order instantly via
              WhatsApp for the fastest service.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/8801601059999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-green-500 transition-colors"
                data-ocid="footer.link"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-500 transition-colors"
                data-ocid="footer.link"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/110939827029033"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                data-ocid="footer.link"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Home",
                "New Arrivals",
                "Best Sellers",
                "Offers",
                "About Us",
              ].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-white/60 text-sm hover:text-yellow-400 transition-colors"
                    data-ocid="footer.link"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Categories
            </h4>
            <ul className="space-y-2">
              {[
                "Men's Clothing",
                "Women's Clothing",
                "Kids' Wear",
                "Traditional",
                "Accessories",
              ].map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    className="text-white/60 text-sm hover:text-yellow-400 transition-colors"
                    data-ocid="footer.link"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <SiWhatsapp className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href="https://wa.me/8801601059999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +880 1601-059999
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a
                  href="tel:01737392171"
                  className="hover:text-white transition-colors"
                >
                  01737-392171
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a
                  href="mailto:uniqobd.com@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  uniqobd.com@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <SiFacebook className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="https://www.facebook.com/110939827029033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  UNIQO BD on Facebook
                </a>
              </li>
            </ul>
            <p className="text-white/60 text-xs mb-2">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-400"
                data-ocid="footer.input"
              />
              <button
                type="button"
                className="bg-yellow-400 hover:bg-yellow-300 text-brand text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
                data-ocid="footer.submit_button"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>
            © {year} UNIQO BD. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="hover:text-white/70 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
