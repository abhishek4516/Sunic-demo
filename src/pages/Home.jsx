import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Ecosystem from "../components/Ecosystem/EcoSystem";
import ContactCTA from "../components/contact/ContactCTA";
import Footer from "../components/layout/Footer";

export default function Home() {

  return (

    <>
      <Hero />
      <Intro />
      <WhatWeDo />
      <Ecosystem />
      <ContactCTA />
      <Footer />
    </>

  );
}