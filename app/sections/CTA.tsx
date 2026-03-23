"use client";

import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");

    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
<section className="mt-20 py-20 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">      <h2 className="text-4xl font-bold">
        Start Your AI Journey Today 🚀
      </h2>
      <p className="mt-4 text-lg">
        Join Altalya and build real-world projects
      </p>

      <button
        onClick={handleClick}
        className="inline-block mt-6 px-6 py-3 bg-black rounded-lg hover:scale-105 transition"
      >
        Get Started
      </button>
    </section>
  );
}