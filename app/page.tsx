import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import WhyLegacy from "../components/WhyLegacy";
import OurPromise from "../components/OurPromise";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <WhyLegacy />
      <OurPromise />
      <Contact />
      <Footer />
    </main>
  );
}