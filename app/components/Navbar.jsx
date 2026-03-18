"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  // Function to handle smooth scrolling to specific IDs
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 md:w-full w-screen z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm ">

      {/* Brand Logo - Scrolls to Top */}
      <div
        onClick={(e) => scrollToSection(e, 'home')}
        className="cursor-pointer text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white"
      >
        QNNX.
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-15 text-sm font-medium text-gray-300">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition">
          Home
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition">
          About
        </a>
        <a href="#solutions" onClick={(e) => scrollToSection(e, 'solutions')} className="hover:text-white transition">
          Solutions
        </a>
        <a href="#engagements" onClick={(e) => scrollToSection(e, 'engagements')} className="hover:text-white transition">
          Engagements
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => router.push('/demo')}
          className="px-5 py-2 bg-[#6d28d9] rounded-full text-sm font-medium hover:bg-[#5b21b6] transition shadow-[0_0_15px_rgba(109,40,217,0.5)] cursor-pointer"
        >
          Request a Demo
        </button>
      </div>
    </nav>
  );
}