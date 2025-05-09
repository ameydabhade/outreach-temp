import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Assessment",
    img: "/assessment.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    desc: "Our process begins with a thorough assessment of your plumbing system to pinpoint the root cause and develop a tailored repair plan.",
  },
  {
    title: "Repair",
    img: "/repair.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    desc: "Once the assessment is complete, our skilled technicians provide efficient and reliable repairs using modern techniques and high-quality materials.",
  },
  {
    title: "Maintenance",
    img: "/maintenance.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    desc: "To prevent future issues, we offer maintenance plans to keep your plumbing systems in top condition, saving you time and money on costly repairs.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-[var(--primary-light)] section-animate">
    <div className="container mx-auto max-w-6xl px-6">
      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-green-900 mb-4 text-center">Our Services</h2>
      <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-16">Comprehensive plumbing solutions tailored to your needs with exceptional quality and reliability.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((s, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="h-64 w-full relative flex items-center justify-center">
              <Image src={s.img} alt={s.title} width={350} height={256} className="object-cover rounded-t-xl" />
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md z-20">
                <div className="text-green-900">
                  {s.icon}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-green-900 mb-3">{s.title}</h3>
              <p className="text-[var(--text-secondary)] mb-4">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center text-green-900 font-medium hover:text-[var(--accent)] transition-colors">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-8 py-3 rounded-full bg-green-900 text-white font-medium btn-animate shadow-md">
          View All Services
        </button>
      </div>
    </div>
  </section>
);

export default Services; 