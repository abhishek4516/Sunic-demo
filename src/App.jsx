import { useState } from "react";

import Navbar from "./components/layout/Navbar";

import Hero from "./components/hero/Hero";

import Intro from "./components/intro/Intro";

import ContactCTA from "./components/contact/ContactCTA";

import Footer from "./components/layout/Footer";

import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

import ClickSpark from "./components/ClickSpark";

import Ecosystem from "./components/Ecosystem/EcoSystem";

import ContactModal from "./components/contact/ContactModal";

// import Stats from "./components/stats/Stats";
// import About from "./components/about/About";
// import Services from "./components/services/Services";
// import Solutions from "./components/solutions/Solutions";
// import Partners from "./components/partners/Partners";
// import TrainDemo from "./components/trainDemo/TrainDemo";

export default function App() {

  const [contactOpen, setContactOpen] =
    useState(false);

  return (

    <>

      <ClickSpark
        sparkColor="#ff5c5c"
        sparkSize={10}
        sparkRadius={14}
        sparkCount={7}
        duration={400}
      >

        <Navbar
          onContactClick={() =>
            setContactOpen(true)
          }
        />

        <Hero />

        <Intro />

        <WhatWeDo />

        <Ecosystem />

        {/* <Stats /> */}
        {/* <About /> */}
        {/* <TrainDemo /> */}
        {/* <Services /> */}
        {/* <Solutions /> */}

        <ContactCTA
          onContactClick={() =>
            setContactOpen(true)
          }
        />

        {/* <Partners /> */}

        <Footer />

        {/* MODAL */}

        <ContactModal
          isOpen={contactOpen}
          onClose={() =>
            setContactOpen(false)
          }
        />

      </ClickSpark>

    </>
  );
}