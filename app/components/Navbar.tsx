"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Altalya</h1>

      <div className="hidden md:flex gap-6 text-gray-300">
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4">
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}