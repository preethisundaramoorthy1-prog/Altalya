"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/#courses"); // ✅ direct scroll target
  };

  return (
    <button
      onClick={handleBack}
      className="text-sm text-gray-400 hover:text-white transition"
    >
      ← Back to Courses
    </button>
  );
}