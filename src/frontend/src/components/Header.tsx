import { Search, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  cartCount: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onCartOpen: () => void;
}

export default function Header({
  cartCount,
  searchQuery,
  onSearchChange,
  onCartOpen,
}: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 shadow-lg"
      style={{
        background: "rgba(13, 13, 43, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(168, 85, 247, 0.25)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 flex-shrink-0"
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-black text-white">
              UNIQO <span className="text-yellow-400">BD</span>
            </span>
          </motion.div>

          {/* Nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {[
              "Home",
              "New Arrivals",
              "Best Sellers",
              "Hot Deals",
              "Contact",
            ].map((link) => (
              <motion.button
                key={link}
                type="button"
                className="text-white/60 hover:text-yellow-400 transition-colors font-medium"
                whileHover={{ y: -1 }}
                data-ocid="nav.link"
              >
                {link}
              </motion.button>
            ))}
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-xs hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
              <input
                type="text"
                placeholder="Search toys & gadgets..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/30 rounded-xl focus:outline-none focus:ring-2 transition-colors"
                style={{
                  background: "rgba(168, 85, 247, 0.1)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                }}
                data-ocid="header.search_input"
              />
            </div>
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onCartOpen}
              className="relative flex items-center gap-2 text-white font-bold px-4 py-2 rounded-xl text-sm transition-all cursor-pointer select-none"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 0 15px rgba(168,85,247,0.4)",
                WebkitTapHighlightColor: "transparent",
              }}
              data-ocid="cart.open_modal_button"
            >
              <ShoppingCart className="w-4 h-4 pointer-events-none" />
              <span className="hidden sm:inline pointer-events-none">Cart</span>
              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 flex items-center justify-center text-xs bg-yellow-400 text-black font-black px-1 rounded-full pointer-events-none"
                  style={{ lineHeight: 1 }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <input
              type="text"
              placeholder="Search toys & gadgets..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/30 rounded-xl focus:outline-none transition-colors"
              style={{
                background: "rgba(168, 85, 247, 0.1)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
              }}
              data-ocid="header.search_input"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
