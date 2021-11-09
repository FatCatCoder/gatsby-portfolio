import React from "react"

import Home from './home.jsx';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';

import useLocoScroll from '../utils/useLocoScroll'

export default function IndexLayout() {
  useLocoScroll()
  return (
    <>
        <Home />
        <About />
        <Portfolio />
        <Contact />
    </>
  )
}