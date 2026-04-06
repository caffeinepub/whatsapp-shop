import { ArrowRight, MessageCircle, Sparkles, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const FLOATING_EMOJIS = [
  "🚀",
  "🎮",
  "🤖",
  "⚡",
  "🎯",
  "🔮",
  "💎",
  "🦸",
  "🎪",
  "✨",
  "🌟",
  "🎠",
];

export default function Hero() {
  const [particles, setParticles] = useState<
    { id: number; emoji: string; x: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const p = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: FLOATING_EMOJIS[i % FLOATING_EMOJIS.length],
      x: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 5 + Math.random() * 5,
    }));
    setParticles(p);
  }, []);

  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/8801601059999?text=${encodeURIComponent("Hello! I'd like to know more about your amazing toys and gadgets at UNIQO BD.")}`,
      "_blank",
    );
  };

  return (
    <section
      className="relative min-h-[520px] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d0d2b 0%, #1a0a3d 30%, #0f1e45 60%, #0d0d2b 100%)",
      }}
    >
      {/* Animated star field */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-xl select-none pointer-events-none"
          style={{ left: `${p.x}%`, bottom: "-2rem" }}
          animate={{ y: ["-0vh", "-120vh"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {p.emoji}
        </motion.div>
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-10 right-16 w-56 h-56 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-8 left-12 w-44 h-44 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200 text-sm font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          Bangladesh's #1 Premium Toy & Gadget Store
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.span
            className="block text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(168,85,247,0.5)",
                "0 0 40px rgba(168,85,247,0.8)",
                "0 0 20px rgba(168,85,247,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            UNIQO
          </motion.span>
          <motion.span
            className="block"
            style={{ color: "#f59e0b" }}
            animate={{
              textShadow: [
                "0 0 20px rgba(245,158,11,0.5)",
                "0 0 60px rgba(245,158,11,0.9)",
                "0 0 20px rgba(245,158,11,0.5)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
          >
            BD
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-purple-200 text-xl font-semibold mb-2 tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Zap className="inline w-5 h-5 text-yellow-400 mr-1" />
          Toys • Gadgets • Collectibles
          <Zap className="inline w-5 h-5 text-yellow-400 ml-1" />
        </motion.p>

        <motion.p
          className="text-white/60 text-base max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Discover extraordinary premium toys and gadgets. Order instantly via
          WhatsApp for fast delivery across Bangladesh.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            type="button"
            onClick={scrollToCatalog}
            className="inline-flex items-center gap-2 font-black px-8 py-4 rounded-2xl text-base transition-all"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              color: "white",
              boxShadow: "0 0 30px rgba(245,158,11,0.5)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(245,158,11,0.8)",
            }}
            whileTap={{ scale: 0.97 }}
            data-ocid="hero.primary_button"
          >
            <Star className="w-5 h-5" /> Shop Now{" "}
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            type="button"
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 border-2 border-purple-400/60 text-purple-200 font-semibold px-8 py-4 rounded-2xl text-base transition-all"
            style={{ background: "rgba(168,85,247,0.1)" }}
            whileHover={{
              scale: 1.05,
              background: "rgba(168,85,247,0.25)",
              borderColor: "rgba(168,85,247,1)",
            }}
            whileTap={{ scale: 0.97 }}
            data-ocid="hero.secondary_button"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </motion.button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-14 flex justify-center gap-10 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { label: "Premium Products", value: "500+", icon: "🎁" },
            { label: "Happy Customers", value: "10k+", icon: "😍" },
            { label: "Fast Delivery", value: "24h", icon: "⚡" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center px-6 py-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
              whileHover={{ scale: 1.05, background: "rgba(168,85,247,0.15)" }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black text-yellow-400">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
