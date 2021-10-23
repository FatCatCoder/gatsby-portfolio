import React from "react"

// import Navbar from './Navbar.jsx';
// import Sidebar from "./sidebar.js";
import Home from './home.jsx';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';
import Blog from './blog.jsx';
import Contact from './contact.jsx';


export default function IndexLayout({ children }) {
  return (
    <>
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
    </>
  )
}