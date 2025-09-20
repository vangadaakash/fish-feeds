// src/pages/Home.jsx
import Hero from "../pages/Hero";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "./Gallery";
import Testimonials from "../components/Testimonals";
import ProductCard from "../pages/ProductCard"


function Home() {
  return (
    <div className="w-full">
      
      <Hero />
      <About />
      <Gallery />
      <ProductCard />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
