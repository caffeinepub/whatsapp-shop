import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { CartItem } from "../types";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onUpdateQuantity: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-label="WhatsApp"
    role="img"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function CartDrawer({
  open,
  onClose,
  items,
  total,
  onUpdateQuantity,
  onRemove,
}: CartDrawerProps) {
  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    const lines = items
      .map(
        (i) =>
          `• ${i.product.name} x${i.quantity} - ৳${(i.product.price * i.quantity).toFixed(2)}`,
      )
      .join("\n");
    const message = `Hello UNIQO BD! I'd like to place an order:\n\n${lines}\n\nTotal: ৳${total.toFixed(2)}\n\nPlease confirm my order. Thank you!`;
    window.open(
      `https://wa.me/8801601059999?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            data-ocid="cart.modal"
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 flex flex-col shadow-2xl"
            style={{
              background: "oklch(0.1 0.03 280)",
              borderLeft: "1px solid rgba(168,85,247,0.25)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            data-ocid="cart.dialog"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{
                background: "linear-gradient(135deg, #4c1d95, #7c3aed)",
                borderBottom: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <h2 className="text-lg font-bold flex items-center gap-2 text-white">
                <ShoppingBag className="w-5 h-5" /> Your Cart
                {items.length > 0 && (
                  <span className="text-sm font-normal text-white/70">
                    ({items.reduce((s, i) => s + i.quantity, 0)} items)
                  </span>
                )}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                data-ocid="cart.close_button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center h-full text-center py-16"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  data-ocid="cart.empty_state"
                >
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
                  <p
                    className="text-lg font-medium"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Your cart is empty
                  </p>
                  <p className="text-sm mt-1">Add some items to get started!</p>
                </div>
              ) : (
                items.map((item, idx) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 rounded-xl p-3"
                    style={{
                      background: "rgba(168,85,247,0.08)",
                      border: "1px solid rgba(168,85,247,0.2)",
                    }}
                    data-ocid={`cart.item.${idx + 1}`}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white line-clamp-2 leading-snug">
                        {item.product.name}
                      </p>
                      <p
                        className="text-sm font-bold mt-1"
                        style={{ color: "#a855f7" }}
                      >
                        ৳{item.product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                          style={{
                            border: "1px solid rgba(168,85,247,0.4)",
                            color: "rgba(255,255,255,0.7)",
                            background: "rgba(168,85,247,0.1)",
                          }}
                          data-ocid="cart.secondary_button"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                          style={{
                            border: "1px solid rgba(168,85,247,0.4)",
                            color: "rgba(255,255,255,0.7)",
                            background: "rgba(168,85,247,0.1)",
                          }}
                          data-ocid="cart.primary_button"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button
                        type="button"
                        onClick={() => onRemove(item.product.id)}
                        className="transition-colors"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        data-ocid="cart.delete_button"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <p className="text-sm font-bold text-yellow-400">
                        ৳{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="px-5 py-4 space-y-4"
                style={{
                  borderTop: "1px solid rgba(168,85,247,0.25)",
                  background: "oklch(0.12 0.04 280)",
                }}
              >
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Subtotal
                  </span>
                  <span className="text-xl font-bold text-yellow-400">
                    ৳{total.toFixed(2)}
                  </span>
                </div>
                {total < 500 && (
                  <p
                    className="text-xs"
                    style={{ color: "rgba(168,85,247,0.8)" }}
                  >
                    Add ৳{(500 - total).toFixed(2)} more for free delivery!
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity text-base"
                  style={{ background: "#25D366" }}
                  data-ocid="cart.confirm_button"
                >
                  <WhatsAppIcon /> Checkout via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
