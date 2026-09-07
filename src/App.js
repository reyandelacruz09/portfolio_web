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
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0a0e1a] text-gray-900 dark:text-slate-200 relative overflow-x-hidden">
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-glow-pulse" />
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '3s' }} />
          </div>
          <div className="relative z-10">
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
        </div>
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;
