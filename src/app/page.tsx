import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f8f8f3] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-0">
        <Hero />
        <About />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
