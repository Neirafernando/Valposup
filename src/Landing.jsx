import React from 'react'
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const Landing = () => {
    return (
        <div>
            <NavbarComponent />
            <Hero />
            <Services />
            <Testimonials />
            <Gallery />
            <Contact />

        </div>
    )
}

export default Landing