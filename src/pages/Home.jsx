import Hero from "../components/hero/Hero";
// import Intro from "../components/intro/Intro";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Ecosystem from "../components/Ecosystem/Ecosystem";
import ContactCTA from "../components/contact/ContactCTA";
import Footer from "../components/layout/Footer";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import About from "../components/about/About";
import BackToTop from "../components/BackToTop/BackToTop";
export default function Home({ onContactClick }) {
  return (
    <>
      <Hero />
      <About />
      {/* <Intro /> */}
      <WhatWeDo />
       <Ecosystem />
      <LogoLoop />
     

      <ContactCTA onContactClick={onContactClick} />
<BackToTop />
      <Footer />
    </>
  );
}
