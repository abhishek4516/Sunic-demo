import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import Stats from "./components/stats/Stats";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Solutions from "./components/solutions/Solutions";
import ContactCTA from "./components/contact/ContactCTA";
import Footer from "./components/layout/Footer";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import ClickSpark from "./components/ClickSpark";
// import Partners from "./components/partners/Partners";
// import TrainDemo from "./components/trainDemo/TrainDemo";

export default function App() {
  return (
    <>
    <ClickSpark
      sparkColor="#ff5c5c"
      sparkSize={10}
      sparkRadius={14}
      sparkCount={7}
      duration={400}
    >
      <Navbar />
      <Hero />
      <Intro />
      <WhatWeDo />
      <Stats />
      <About />
      {/* <TrainDemo /> */}
      <Services />
      <Solutions />
      <ContactCTA />
      {/* <Partners /> */}
      <Footer />
      </ClickSpark>
    </>
  );
}
