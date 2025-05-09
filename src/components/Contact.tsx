"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Contact = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState({
    brandname: "",
    city: ""
  });

  useEffect(() => {
    const brandname = searchParams.get("brandname") || "";
    const city = searchParams.get("city") || "";
    setParams({ brandname, city });
  }, [searchParams]);

  // Get personalized greeting
  const getGreeting = () => {
    const defaultGreeting = "Get in Touch";
    
    if (params.brandname) {
      return `Connect with ${params.brandname}`;
    } 
    
    if (params.city) {
      return `Get Plumbing Help in ${params.city}`;
    }
    
    return defaultGreeting;
  };

  return (
  <section id="contact" className="py-24 bg-white relative section-animate">
    <div className="absolute top-0 inset-x-0 h-24 bg-[var(--primary-light)]"></div>
    
    <div className="container mx-auto max-w-6xl px-6 relative z-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-green-900 text-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">{getGreeting()}</h2>
            <p className="mb-8 opacity-90">Have questions about our services or need a quote? Reach out to our team today.</p>
            
            <div className="space-y-6 mt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="mt-1 opacity-90">+1-234-567-7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="mt-1 opacity-90">info@saturnthompson.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Address</h3>
                  <p className="mt-1 opacity-90">{params.city ? `${params.city} Area` : "530 Terry Francois St."}<br/>San Francisco, CA 94158</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-12">
            <h3 className="text-2xl font-serif font-medium text-green-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-900" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                  <input 
                    type="text"
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-900" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-900" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-900" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-900" 
                ></textarea>
              </div>
              
              <button type="submit" className="px-8 py-3 rounded-md bg-green-900 text-white font-medium hover:bg-green-800 transition-colors duration-300 w-full md:w-auto btn-animate">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact; 