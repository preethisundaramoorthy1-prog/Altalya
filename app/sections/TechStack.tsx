"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const techs = [
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "Arduino",
    "Node.js",
  ];

  return (
    <section className="py-20 bg-black text-white text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Technologies You Will Learn
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {techs.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="px-6 py-3 bg-gray-900 rounded-full text-sm md:text-base 
                       hover:bg-purple-600 hover:scale-110 transition duration-300 cursor-pointer shadow-md"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}