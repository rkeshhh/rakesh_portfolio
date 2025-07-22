import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-[#0a192f] text-white">
            <Navbar />
            <Hero />
            <About />
            {/* Skills should come first */}
            <Skills />
            {/* Experience after Skills */}
            <Experience />
            {/* Projects after Experience */}
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
