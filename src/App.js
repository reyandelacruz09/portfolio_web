import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ContentProvider } from "./content";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <ContentProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-[#0b1020] text-gray-900 dark:text-slate-200">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;