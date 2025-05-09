"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Hero = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState({
    brandname: "",
    city: "",
    service: ""
  });

  useEffect(() => {
    const brandname = searchParams.get("brandname") || "";
    const city = searchParams.get("city") || "";
    const service = searchParams.get("service") || "";
    setParams({ brandname, city, service });
  }, [searchParams]);

  // Construct personalized headline
  const getHeadline = () => {
    const defaultBrandName = "Reliable Plumbing Solutions";
    const brandName = params.brandname || defaultBrandName;
    
    if (params.city) {
      return `Best Plumbing Services in ${params.city}`;
    }
    
    return brandName;
  };

  // Construct personalized subheadline
  const getSubheadline = () => {
    const baseLine = "Expert Solutions for Every Plumbing Need";
    
    if (params.service) {
      const service = params.service.charAt(0).toUpperCase() + params.service.slice(1);
      return `Expert ${service} Solutions for Every Plumbing Need`;
    }
    
    return baseLine;
  };

  return (
    <section className="relative h-[90vh] bg-[#f8f8f3] overflow-hidden section-animate">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,61,47,0.1)] to-transparent z-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center items-start p-12 lg:p-16 z-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-green-900 tracking-tight">
            {getHeadline().split(' ').map((word, index) => (
              <span key={index} className={`block ${index !== 0 ? 'mb-2' : ''} animate-[fadeIn_0.6s_ease-in-out_${0.2 + index * 0.2}s_both]`}>
                {word}
              </span>
            ))}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] mt-4 font-light tracking-wider animate-[fadeIn_0.6s_ease-in-out_0.8s_both]">
            {getSubheadline()}
          </p>
          <button className="mt-8 px-10 py-4 rounded-full bg-green-900 text-white font-medium btn-animate animate-[fadeIn_0.6s_ease-in-out_1s_both] shadow-md">
            Get Started
            <span className="ml-2">→</span>
          </button>
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/plumbing-hero.jpg"
            alt="Plumber working"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 