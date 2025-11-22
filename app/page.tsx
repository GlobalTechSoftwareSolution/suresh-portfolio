import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./contact/page";
import About from "./about/page"; 
import Projects from "./projects/page";
import Experience from "./experience/page";
import Education from "./education/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
