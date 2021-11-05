import React from "react"

import Home from './home.jsx';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';

export default function IndexLayout({ children }) {
  return (
    <>
        <Home />
        <About />
        <Portfolio />
        <Contact />
    </>
  )
}