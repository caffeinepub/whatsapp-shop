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
import Sidebar from "./components/Sidebar";
import type { CartItem, Product } from "./types";

const PRODUCTS_PER_PAGE = 6;

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((r) => r.json())
      .then((data: Product[]) => setProducts(data))
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
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );
    if (sortOrder === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortOrder === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortOrder === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, searchQuery, selectedCategories, priceRange, sortOrder]);

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
    toast.success(`${product.name} added to cart!`);
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
      `Hello UNIQO BD! I'd like to order:\n\n• ${product.name} x1 - ৳${product.price.toFixed(2)}\n\nTotal: ৳${product.price.toFixed(2)}\n\nPlease confirm my order. Thank you!`,
    );
    window.open(`https://wa.me/8801601059999?text=${text}`, "_blank");
  };

  const handleCategoryChange = (cat: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, cat] : prev.filter((c) => c !== cat),
    );
    setCurrentPage(1);
  };

  const cartTotal = cartItems.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0,
  );
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products],
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Toaster position="top-right" />
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

      <main className="flex-1" id="catalog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <Sidebar
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceRangeChange={(range) => {
                  setPriceRange(range);
                  setCurrentPage(1);
                }}
                sortOrder={sortOrder}
                onSortChange={(s) => {
                  setSortOrder(s);
                  setCurrentPage(1);
                }}
              />
            </aside>

            {/* Product grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing{" "}
                  <span className="font-semibold text-foreground">
                    {filtered.length}
                  </span>{" "}
                  products
                </p>
                {/* Mobile sort */}
                <select
                  className="lg:hidden border border-border rounded-md text-sm px-3 py-1.5 bg-background"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  data-ocid="sort.select"
                >
                  <option value="default">Sort: Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {paginated.length === 0 ? (
                <div
                  className="text-center py-20 text-muted-foreground"
                  data-ocid="products.empty_state"
                >
                  <p className="text-lg font-medium">No products found</p>
                  <p className="text-sm mt-1">Try adjusting your filters</p>
                </div>
              ) : (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                  data-ocid="products.list"
                >
                  <AnimatePresence mode="popLayout">
                    {paginated.map((product, idx) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    data-ocid="products.pagination_prev"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setCurrentPage(p)}
                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                          p === currentPage
                            ? "bg-brand text-white"
                            : "border border-border hover:bg-muted"
                        }`}
                      >
                        {p}
                      </button>
                    ),
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    data-ocid="products.pagination_next"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
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
