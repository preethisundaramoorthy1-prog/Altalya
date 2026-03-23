"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
  {
    text: "Altalya helped me land my first internship in AI. The hands-on projects and mentorship gave me real confidence to work on industry-level problems.",
    name: "Arjun Kumar",
    role: "AI Intern",
  },
  {
    text: "The mentors are incredibly supportive and the learning experience is very practical. I built multiple real-world projects during the training.",
    name: "Priya Sharma",
    role: "Robotics Student",
  },
  {
    text: "One of the best platforms to learn AI and Robotics from scratch. The structured curriculum made complex topics easy to understand.",
    name: "Rahul Verma",
    role: "IoT Developer",
  },
];

  return (
    <section className="py-24 bg-black text-white px-6 text-center relative overflow-hidden">
      {/* 🔥 Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-3xl"></div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-16 relative z-10">
        What Our Students Say
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl 
                       hover:scale-105 transition duration-300 shadow-xl"
          >
            {/* ⭐ Quote */}
            <p className="text-gray-300 italic leading-relaxed">
              “{item.text}”
            </p>

            {/* 👤 Name */}
            <h3 className="mt-6 font-semibold text-purple-400">
              {item.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}