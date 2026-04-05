import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/8801601059999?text=${encodeURIComponent("Hello! I'd like to know more about your products at UNIQO BD.")}`,
      "_blank",
    );
  };

  return (
    <section
      className="relative min-h-[420px] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1F2B45 0%, #2d3f66 50%, #1F2B45 100%)",
      }}
    >
      {/* Colorful accent blobs inspired by logo */}
      <div
        className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F5C400, transparent)" }}
      />
      <div
        className="absolute top-5 right-52 w-24 h-24 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #F28C1B, transparent)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #53B64A, transparent)" }}
      />
      <div
        className="absolute bottom-20 left-60 w-20 h-20 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #4AB6E6, transparent)" }}
      />
      <div
        className="absolute top-20 left-20 w-16 h-16 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F04E6E, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Colorful dots logo accent */}
          <div className="flex justify-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="w-3 h-3 rounded-full bg-blue-300" />
            <span className="w-3 h-3 rounded-full bg-orange-400" />
            <span className="w-3 h-3 rounded-full bg-pink-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
            UNIQO <span className="text-yellow-400">BD</span>
          </h1>
          <p className="text-white/80 text-lg mb-2">
            Your Unique Fashion Destination
          </p>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            Quality clothing and fashion — order instantly via WhatsApp for fast
            delivery across Bangladesh.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={scrollToCatalog}
              className="inline-flex items-center gap-2 bg-yellow-400 text-brand font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
              data-ocid="hero.primary_button"
            >
              Explore Catalog <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              data-ocid="hero.secondary_button"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </button>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-12 flex justify-center gap-12 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { label: "Products", value: "500+" },
            { label: "Happy Customers", value: "10k+" },
            { label: "Cities Covered", value: "25+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
