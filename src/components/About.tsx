import React from "react";

const About = () => (
  <section id="about" className="py-24 bg-[var(--primary-light)] relative section-animate">
    <div className="absolute top-0 left-0 w-24 h-24 bg-[var(--accent)] opacity-10 rounded-br-full"></div>
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-10 rounded-tl-full"></div>
    
    <div className="container mx-auto max-w-5xl px-6">
      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-green-900 mb-8 text-center">About Our Expertise</h2>
      
      <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-sm">
        <p className="text-[var(--text-primary)] leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          At <span className="font-serif font-medium">Saturn & B. Thompson</span>, we excel in providing expert plumbing services with a focus on advanced diagnostics and meticulous repair. Our team is dedicated to delivering tailored solutions for local, clean, and versatile plumbing issues.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-900 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium mb-2 text-[var(--text-primary)]">Quality Service</h3>
            <p className="text-[var(--text-secondary)]">Meticulous attention to detail and uncompromising quality</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-900 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium mb-2 text-[var(--text-primary)]">Quick Response</h3>
            <p className="text-[var(--text-secondary)]">Fast and reliable service when you need it most</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-900 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium mb-2 text-[var(--text-primary)]">Expert Solutions</h3>
            <p className="text-[var(--text-secondary)]">Advanced techniques and comprehensive maintenance</p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-green-900 text-white font-medium btn-animate shadow-sm">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About; 