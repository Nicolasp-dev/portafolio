import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

import "./index.css";
import Experience from "./components/Experience";

function App() {
  return (
    <section>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Footer />
    </section>
  );
}

export default App;
