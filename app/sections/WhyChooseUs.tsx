"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Industry-Oriented Curriculum",
      desc: "Our courses are designed based on real industry requirements, ensuring you learn skills that are in demand.",
    },
    {
      title: "Hands-on Projects",
      desc: "Work on real-world projects to build a strong portfolio and gain practical experience.",
    },
    {
      title: "Expert Mentorship",
      desc: "Learn directly from industry professionals with experience in AI, Robotics, and IoT.",
    },
    {
      title: "Internship Opportunities",
      desc: "Get access to internships and real company exposure to kickstart your career.",
    },
    {
      title: "Placement Support",
      desc: "We guide you with resume building, mock interviews, and placement assistance.",
    },
    {
      title: "Innovation & Research",
      desc: "Encouraging students to innovate, build startups, and contribute to future technologies.",
    },
  ];

  return (
    <section className="py-20 bg-black text-white text-center px-6">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Why Choose Us
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-900 p-6 rounded-xl hover:scale-105 hover:bg-gray-800 transition duration-300 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-400">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}