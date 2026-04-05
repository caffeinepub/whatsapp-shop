import { Badge } from "@/components/ui/badge";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

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
    <header className="sticky top-0 z-40 bg-white border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-1">
              {/* Colorful dot row inspired by Uniqo BD logo */}
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
            </div>
            <span className="text-xl font-bold text-brand hidden sm:block">
              UNIQO <span className="text-foreground">BD</span>
            </span>
          </div>

          {/* Nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {[
              "New Arrivals",
              "Categories",
              "Best Sellers",
              "Offers",
              "Contact",
            ].map((link) => (
              <button
                key={link}
                type="button"
                className="text-muted-foreground hover:text-brand transition-colors"
                data-ocid="nav.link"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-xs hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg bg-muted/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
                data-ocid="header.search_input"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden sm:flex p-2 rounded-lg text-muted-foreground hover:text-brand hover:bg-muted transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="hidden sm:flex p-2 rounded-lg text-muted-foreground hover:text-brand hover:bg-muted transition-colors"
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onCartOpen}
              className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors relative"
              data-ocid="cart.open_modal_button"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 flex items-center justify-center text-xs bg-yellow-400 text-brand px-1"
                >
                  {cartCount}
                </Badge>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg bg-muted/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
              data-ocid="header.search_input"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
