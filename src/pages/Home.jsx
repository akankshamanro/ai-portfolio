import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;
