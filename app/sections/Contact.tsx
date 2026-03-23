"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Get In Touch
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* 🔹 LEFT SIDE - CONTACT DETAILS */}
        <div className="space-y-6">

          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-gray-800 hover:border-purple-500 transition">
            <MapPin className="text-purple-400" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-400">
                Altalya Innovation Center, Chennai, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-gray-800 hover:border-blue-500 transition">
            <Phone className="text-blue-400" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-400">+91 7560056003</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-gray-800 hover:border-pink-500 transition">
            <Mail className="text-pink-400" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-400">contact@altalya.com</p>
            </div>
          </div>

        </div>

        {/* 🔹 RIGHT SIDE - CONTACT FORM */}
        <form className="space-y-4 p-6 rounded-xl bg-white/5 backdrop-blur-md border border-gray-800">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}