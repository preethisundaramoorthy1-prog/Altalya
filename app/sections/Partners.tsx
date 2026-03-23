"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const partners = ["Google", "Microsoft", "Amazon", "IBM"];

  return (
    <section className="py-20 bg-black text-white text-center px-6 relative overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>

      <h2 className="text-3xl md:text-4xl font-bold mb-12 relative z-10">
        Our Partners
      </h2>

      <div className="flex flex-wrap justify-center gap-10 relative z-10">
        {partners.map((partner, i) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 
                       rounded-xl text-lg font-semibold 
                       hover:scale-110 hover:bg-white/10 transition duration-300 shadow-lg"
          >
            {partner}
          </motion.div>
        ))}
      </div>
    </section>
  );
}