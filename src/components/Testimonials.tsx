import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Homeowner",
    text: "I was amazed by the professionalism and efficiency of Saturn & B. Thompson. They quickly identified the issue and provided a long-lasting solution that saved me thousands in potential damages.",
    image: "/person1.jpg"
  },
  {
    name: "Emily Smith",
    role: "Business Owner",
    text: "Exceptional service. The team at Saturn & B. Thompson went above and beyond to fix a complex plumbing problem in my commercial space with minimal disruption to my business operations.",
    image: "/person2.jpg"
  },
  {
    name: "Raj Patel",
    role: "Property Manager",
    text: "Saturn & B. Thompson truly stands out for their expertise and dedication. Their maintenance program has reduced our emergency calls by 70% and extended the life of our plumbing systems.",
    image: "/person3.jpg"
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-white section-animate">
    <div className="container mx-auto max-w-5xl px-6">
      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-green-900 mb-12 text-center">What Our Clients Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[var(--primary-light)] bg-opacity-20 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <div className="text-[var(--accent)] text-5xl absolute top-4 left-4 opacity-20">"</div>
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden relative mr-4">
                <Image src={t.image} alt={t.name} width={56} height={56} className="object-cover" />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-green-900">{t.name}</div>
                <div className="text-[var(--text-secondary)] text-sm">{t.role}</div>
              </div>
            </div>
            <div className="text-[var(--text-primary)] italic relative z-10">{t.text}</div>
            <div className="text-[var(--accent)] text-5xl absolute bottom-4 right-4 opacity-20">"</div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-full border-2 border-green-900 text-green-900 font-medium hover:bg-green-900 hover:text-white transition-colors duration-300">
          View All Testimonials
        </button>
      </div>
    </div>
  </section>
);

export default Testimonials; 