"use client";

import { motion } from "framer-motion";

export default function Training() {
  const programs = [
    {
      title: "AI & Machine Learning",
      desc: "Master AI concepts including machine learning, deep learning, and real-world model deployment.",
    },
    {
      title: "Robotics Engineering",
      desc: "Design and build intelligent robots using sensors, actuators, and automation systems.",
    },
    {
      title: "Internet of Things (IoT)",
      desc: "Create smart systems using IoT devices, cloud integration, and real-time data processing.",
    },
  ];

  return (
    <section className="py-20 bg-gray-950 text-white px-6 text-center">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Training Programs
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {program.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {program.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}