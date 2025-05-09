import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="font-serif text-xl font-semibold text-green-900 mb-6">Saturn & B. Thompson</h2>
          <p className="text-[var(--text-secondary)] mb-6">Professional plumbing services with quality, reliability, and expertise since 1998.</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-green-900 text-white p-2 rounded-full hover:bg-[var(--accent)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.16c-.94.42-1.95.7-3 .82 1.08-.65 1.91-1.67 2.3-2.89-1.01.6-2.13 1.03-3.32 1.27-1.08-1.15-2.3-1.86-3.63-1.86-2.75 0-5 2.25-5 5 0 .39.04.78.13 1.14-4.16-.21-7.85-2.2-10.32-5.22-.43.74-.68 1.6-.68 2.52 0 1.74.88 3.27 2.23 4.17-.82-.02-1.59-.25-2.27-.62v.06c0 2.42 1.72 4.44 4 4.9-.42.11-.86.17-1.32.17-.32 0-.64-.03-.94-.09.64 2 2.5 3.45 4.68 3.49-1.4 1.1-3.17 1.75-5.08 1.75-.33 0-.65-.02-.97-.06 1.8 1.15 3.94 1.83 6.24 1.83 7.5 0 11.6-6.21 11.6-11.6 0-.18 0-.35-.01-.53 1.01-.72 1.88-1.63 2.36-2.67l-.1-.02z"/>
              </svg>
            </a>
            <a href="#" className="bg-green-900 text-white p-2 rounded-full hover:bg-[var(--accent)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.096 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.509-1.096.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.883 4.883 0 0 1-1.772-1.153 4.915 4.915 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.915 4.915 0 0 1 1.153-1.772c.5-.509 1.096-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.8c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.858-.048 1.054-.059 1.37-.059 4.04 0 2.67.01 2.986.059 4.04.045.976.207 1.505.344 1.858.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.858.344 1.054.048 1.37.059 4.04.059 2.67 0 2.986-.01 4.04-.059.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.858.048-1.054.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.097 3.097 0 0 0-1.15-.748c-.353-.137-.882-.3-1.858-.344-1.054-.048-1.37-.059-4.04-.059zm0 3.064A5.136 5.136 0 1 1 12 17.136 5.136 5.136 0 0 1 12 6.864zm0 8.464a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.536-8.691a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
              </svg>
            </a>
            <a href="#" className="bg-green-900 text-white p-2 rounded-full hover:bg-[var(--accent)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.125 0H4.875C2.1875 0 0 2.1875 0 4.875v14.25C0 21.8125 2.1875 24 4.875 24h14.25C21.8125 24 24 21.8125 24 19.125V4.875C24 2.1875 21.8125 0 19.125 0zM8.625 19.125h-3.75V8.625h3.75v10.5zM6.75 7.5C5.625 7.5 4.5 6.375 4.5 5.25s1.125-2.25 2.25-2.25S9 4.125 9 5.25s-1.125 2.25-2.25 2.25zm13.5 11.625h-3.75v-6c0-1.125 0-2.625-1.5-2.625s-1.875 1.125-1.875 2.25v6.375h-3.75V8.625H12v1.5c.375-.75 1.5-1.5 3-1.5 3 0 3.75 2.25 3.75 4.875v5.625z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="font-serif text-lg font-medium text-green-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#about" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">About Us</Link></li>
            <li><Link href="#services" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Our Services</Link></li>
            <li><Link href="#testimonials" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Testimonials</Link></li>
            <li><Link href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="font-serif text-lg font-medium text-green-900 mb-4">Contact Info</h3>
          <address className="not-italic text-[var(--text-secondary)] space-y-2">
            <p>530 Terry Francois St.</p>
            <p>San Francisco, CA 94158</p>
            <p className="mt-4">+1-234-567-7890</p>
            <p>info@saturnthompson.com</p>
          </address>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="font-serif text-lg font-medium text-green-900 mb-4">Business Hours</h3>
          <ul className="text-[var(--text-secondary)] space-y-2">
            <li className="flex justify-between"><span>Monday-Friday:</span> <span>9AM - 6PM</span></li>
            <li className="flex justify-between"><span>Saturday:</span> <span>10AM - 4PM</span></li>
            <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            <li className="mt-4">24/7 Emergency Service Available</li>
          </ul>
        </div>
      </div>
      
      <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--text-secondary)]">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Saturn & B. Thompson. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[var(--accent)] transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-[var(--accent)] transition-colors">Accessibility</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 