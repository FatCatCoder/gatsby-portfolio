import React from "react"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import SpringNavbar from './springNavbar.jsx';
import Home from '../components/home.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Blog from '../components/blog.jsx';
import Contact from '../components/contact.jsx';

export default function IndexLayout({ children }) {
    const ParallaxRef = React.useRef();
  return (
    <>
    
    <Parallax pages={5} ref={ParallaxRef}>
    <ParallaxLayer sticky={true}>
        <SpringNavbar scrollRef={ParallaxRef}/>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={2}>
        <Home />
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={2}>
        <About />
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={2}>
        <Portfolio />
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={2}>
        <Blog />
    </ParallaxLayer>
    <ParallaxLayer offset={4} speed={2}>
        <Contact />
    </ParallaxLayer>
        {/* <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Contact /> */}
    </Parallax>
    </>
  )
}