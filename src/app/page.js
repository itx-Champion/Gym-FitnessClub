import Image from "next/image";
import Hero from './components/Hero';
import About from './components/Aboutus';
import Pricing from './components/Pricing';

import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Pricing/>
      <About />


      <Contact />
    </div>
  );
}
