import Hero from "./sections/Hero";
import About from "./sections/About";
import Courses from "./sections/Courses";
import WhyChooseUs from "./sections/WhyChooseUs";
import Training from "./sections/Training";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// ✅ NEW SECTIONS
import Stats from "./sections/Stats";
import TechStack from "./sections/TechStack";
import FAQ from "./sections/FAQ";
import Partners from "./sections/Partners";
import CTA from "./sections/CTA";
export default function Home() {
  return (
    <main className="bg-black text-white">

      <Hero />
      <About />

      {/* 🔥 NEW */}
      <Stats />

      <Courses />
      <WhyChooseUs />

      {/* 🔥 NEW */}
      <TechStack />

      <Training />
      <Testimonials />

      {/* 🔥 NEW */}
      <Partners />
      <FAQ />
      <CTA />

      <Contact />
      <Footer />

    </main>
  );
}
