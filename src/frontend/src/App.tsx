import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import AnnouncementBar from "./components/AnnouncementBar";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import type { CartItem, Product } from "./types";

const PRODUCTS_PER_PAGE = 6;

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((r) => r.json())
      .then((data: { results?: Product[] } | Product[]) => {
        if (Array.isArray(data)) setProducts(data);
        else if (data.results) setProducts(data.results);
      })
      .catch(() => toast.error("Failed to load products"));
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    return list;
  }, [products, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PRODUCTS_PER_PAGE),
  );
  const paginated = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart!`, { duration: 2000 });
  };

  const handleUpdateQuantity = (id: number, qty: number) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.product.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i)),
      );
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));
  };

  const handleOrderViaWhatsApp = (product: Product) => {
    const text = encodeURIComponent(
      `Hello UNIQO BD! I'd like to order:\n\n\u2022 ${product.name} x1 - \u09F3${product.price.toFixed(2)}\n\nTotal: \u09F3${product.price.toFixed(2)}\n\nPlease confirm my order. Thank you!`,
    );
    window.open(`https://wa.me/8801601059999?text=${text}`, "_blank");
  };

  const cartTotal = cartItems.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0,
  );
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.07 0.02 280)" }}
    >
      <Toaster position="bottom-center" />
      <AnnouncementBar />
      <Header
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
        onCartOpen={() => setCartOpen(true)}
      />
      <Hero />

      <main
        className="flex-1"
        id="catalog"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.18) 0%, transparent 70%), oklch(0.09 0.025 280)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Section header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full text-sm font-medium text-purple-300"
              style={{
                border: "1px solid rgba(168,85,247,0.3)",
                background: "rgba(168,85,247,0.08)",
              }}
            >
              ✨ Premium Collection
            </div>
            <h2 className="text-3xl font-black text-white mb-2">
              Our <span className="text-yellow-400">Hot</span> Products
            </h2>
            <p className="text-white/50 text-sm">
              Showing{" "}
              <span className="text-yellow-400 font-semibold">
                {filtered.length}
              </span>{" "}
              amazing products
            </p>
          </motion.div>

          {paginated.length === 0 ? (
            <div
              className="text-center py-20 text-white/40"
              data-ocid="products.empty_state"
            >
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-lg font-medium text-white/60">
                No products found
              </p>
              <p className="text-sm mt-1">Try adjusting your search</p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              data-ocid="products.list"
            >
              <AnimatePresence mode="popLayout">
                {paginated.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    data-ocid={`products.item.${idx + 1}`}
                  >
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                      onOrderWhatsApp={handleOrderViaWhatsApp}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                style={{ border: "1px solid rgba(168,85,247,0.3)" }}
                data-ocid="products.pagination_prev"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setCurrentPage(p)}
                  className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                    p === currentPage
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                  style={{
                    background:
                      p === currentPage
                        ? "linear-gradient(135deg, #7c3aed, #a855f7)"
                        : "rgba(168,85,247,0.1)",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                style={{ border: "1px solid rgba(168,85,247,0.3)" }}
                data-ocid="products.pagination_next"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        total={cartTotal}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}
