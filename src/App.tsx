import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
      
      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Arshiya Shaikh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
