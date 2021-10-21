// plugins
import * as React from "react"
// import BackgroundImage from 'gatsby-background-image'
// import { StaticImage } from "gatsby-plugin-image"
import Particles from 'react-particles-js';

// components
import Navbar from '../components/navbar.jsx';
import Home from '../components/home.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Blog from '../components/blog.jsx';
import Contact from '../components/contact.jsx';
// import Sidebar from '../components/sidebar.js';

// styles
import "../styles/global.scss"
import particlesConfig from "../styles/particlesConfig.json"
import {Scrollbar} from 'smooth-scrollbar-react';


const IndexPage = () => {
 
  return (
    <>
      <div className="container-fluid m-0 p-0 bg-transparent">
        {/* <Sidebar /> */}
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Contact />

        <Particles 
          className="vh-100 particles z-behind position-fixed top-0"
          params={particlesConfig}
        />
      </div>
    </>
  )
}

export default IndexPage;
