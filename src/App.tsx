import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Particle from "./components/Particle";

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      {/* <Contact/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
