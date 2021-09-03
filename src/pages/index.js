// plugins
import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
import { StaticImage } from "gatsby-plugin-image"
import Particles from 'react-particles-js';


// pages


// components
//import Navbar from '../components/navbar.js';
import Sidebar from '../components/sidebar.js';

// styles
import "../styles/global.scss"
import particlesConfig from "../styles/particlesConfig.json"




const IndexPage = () => {
  return (
    <>
    <div className="row col-12 m-0 p-0">
      <h1 className="display-1 text-center z-front">Christian Claudeaux</h1>

      <Sidebar />

      <Particles 
        className="vh-100 particles position-absolute col top-0"
        params={particlesConfig}
      />

      {/* <Navbar /> */}
      

      <div className="vh-100 row">
      </div>

      <div className="vh-100 row">
      <h1 className="display-1 text-center z-front">About Me</h1>
      </div>

      <div className="vh-100 row">
      <h1 className="display-1 text-center z-front">Portfolio</h1>
      </div>

      <div className="vh-100 row">
      <h1 className="display-1 text-center z-front">Resume</h1>
      </div>

      <div className="vh-100 row">
      <h1 className="display-1 text-center z-front">Contact</h1>
      </div>
    </div>
    </>
  )
}

export default IndexPage
