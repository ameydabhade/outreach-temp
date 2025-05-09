"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
  const searchParams = useSearchParams();
  const [brandname, setBrandname] = useState("");

  useEffect(() => {
    const brandParam = searchParams.get("brandname") || "";
    setBrandname(brandParam);
  }, [searchParams]);

  return (
    <header className="flex justify-between items-center py-6 px-8 md:px-12 bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="font-serif text-lg font-semibold text-green-900 tracking-wide">
        {brandname || "Saturn & B. Thompson"}
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        <Link href="#about" className="text-green-900 hover:text-[var(--accent)] transition-colors duration-300">About</Link>
        <Link href="#services" className="text-green-900 hover:text-[var(--accent)] transition-colors duration-300">Services</Link>
        <Link href="#contact" className="text-green-900 hover:text-[var(--accent)] transition-colors duration-300">Contact</Link>
        <Link href="#testimonials" className="ml-4 px-5 py-2 rounded-full bg-green-900 text-white font-medium btn-animate">See Testimonials</Link>
      </nav>
      <button className="md:hidden text-green-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </header>
  );
};

export default Header; 