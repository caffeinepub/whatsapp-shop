import { motion } from "motion/react";

const MESSAGES = [
  "🚀 Free delivery on orders over ৳500 | Order via WhatsApp for instant support!",
  "🎮 Bangladesh's Premium Toy & Gadget Store — Amazing deals every day!",
  "⚡ Fast delivery across Bangladesh | 100% Authentic Products Guaranteed!",
];

export default function AnnouncementBar() {
  return (
    <div
      className="overflow-hidden py-2 px-4 text-center text-sm font-semibold text-white relative"
      style={{
        background: "linear-gradient(90deg, #7c3aed, #a855f7, #7c3aed)",
      }}
    >
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["-0%", "-33.33%"] }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {[...MESSAGES, ...MESSAGES, ...MESSAGES].map((msg, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <span key={i} className="inline-block">
            {msg}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
