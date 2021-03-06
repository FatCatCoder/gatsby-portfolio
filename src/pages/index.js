import * as React from "react"

// components
import Layout from '../components/Layout';

// utils
// import isMobile from "../utils/isMobile";

// styles
import ParticlesBackground from '../components/ParticlesBackground'
import "../styles/global.scss"

const IndexPage = () => {
  return(
    <>
      <div data-scroll-container className="main-container container-fluid bg-transparent position-relative" id="main-container">
        <Layout />
      </div>
      <ParticlesBackground />
    </>
  )
}

export default IndexPage;

// inner to outer
/* {!isMobile()? <ParticlesBackground /> : null} */
/* {isMobile()? <ParticlesBackground /> : null} */