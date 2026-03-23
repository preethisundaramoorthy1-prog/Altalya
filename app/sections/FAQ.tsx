"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "Do I need prior coding knowledge?",
      a: "No, we start from basics and guide you step by step with hands-on training.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, you will receive a certificate upon successful completion of the course.",
    },
    {
      q: "Are there real projects?",
      a: "Yes, all our courses include real-world projects to build your portfolio.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-950 text-white px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border border-gray-700 rounded-xl p-5 cursor-pointer hover:bg-gray-900 transition"
            onClick={() =>
              setOpenIndex(openIndex === i ? null : i)
            }
          >
            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.q}</h3>
              <span className="text-purple-400 text-xl">
                {openIndex === i ? "-" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            {openIndex === i && (
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {faq.a}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}