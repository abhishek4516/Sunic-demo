import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import Stats from "./components/stats/Stats";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Solutions from "./components/solutions/Solutions";
import ContactCTA from "./components/contact/ContactCTA";
import Footer from "./components/layout/Footer";
import TrainDemo from "./components/trainDemo/TrainDemo";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Stats />
      <About />
      <TrainDemo />
      <Services />
      <Solutions />
      <ContactCTA />
      <Footer />
    </>
  );
}