import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(180deg, #0d0d2b 0%, #1a0a3d 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.03 }}
            >
              <span className="text-3xl">🚀</span>
              <span className="text-xl font-black">
                UNIQO <span className="text-yellow-400">BD</span>
              </span>
            </motion.div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Bangladesh's premier destination for premium toys, gadgets, and
              collectibles. Order instantly via WhatsApp for the fastest
              service.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://wa.me/8801601059999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.08)" }}
                whileHover={{ scale: 1.2, background: "#25D366" }}
                data-ocid="footer.link"
              >
                <SiWhatsapp className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.08)" }}
                whileHover={{ scale: 1.2, background: "#e1306c" }}
                data-ocid="footer.link"
              >
                <SiInstagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/110939827029033"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.08)" }}
                whileHover={{ scale: 1.2, background: "#1877f2" }}
                data-ocid="footer.link"
              >
                <SiFacebook className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest text-purple-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Home",
                "New Arrivals",
                "Best Sellers",
                "Hot Deals",
                "About Us",
              ].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-white/50 text-sm hover:text-yellow-400 transition-colors"
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
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest text-purple-300">
              Categories
            </h4>
            <ul className="space-y-2">
              {[
                "🤖 RC & Robots",
                "🎮 Gaming & Tech",
                "🔮 Collectibles",
                "⚡ Gadgets",
                "🎯 Fun & Games",
              ].map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    className="text-white/50 text-sm hover:text-yellow-400 transition-colors"
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
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest text-purple-300">
              Contact Us
            </h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-2 text-white/50 text-sm">
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
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-purple-300 flex-shrink-0" />
                <a
                  href="tel:01737392171"
                  className="hover:text-white transition-colors"
                >
                  01737-392171
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a
                  href="mailto:uniqobd.com@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  uniqobd.com@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
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
            <p className="text-white/40 text-xs mb-2">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
                data-ocid="footer.input"
              />
              <button
                type="button"
                className="text-white text-sm font-bold px-3 py-2 rounded-lg transition-colors"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                }}
                data-ocid="footer.submit_button"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-xs"
          style={{ borderTop: "1px solid rgba(168,85,247,0.2)" }}
        >
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
              className="hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="hover:text-white/60 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
