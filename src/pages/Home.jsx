import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import PublicProjects from "./PublicProjects";
import Contact from "../components/Contact";


import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about">
  <About />
</section>

      <Skills />
      
      <section id="projects">
  <PublicProjects />
</section>
      
      <section id="contact">
  <Contact />
</section>

      <Footer />
    </>




  );



  
}
