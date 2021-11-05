import * as React from "react"

// components
import Layout from '../components/Layout';
import Navbar from '../components/Navbar.jsx';
import Sidebar from "../components/sidebar.js";

// utils
import nativeSmoothScroll from "../utils/nativeSmoothScroll";

// styles
import ParticlesBackground from '../components/ParticlesBackground'
import "../styles/global.scss"

const IndexPage = () => {
  return(
    <>
    <Navbar />
      <div data-scroll-container className="main-container container-fluid bg-transparent" id="main-container" style={{willChange: 'transform'}}>
        <Layout />
        {!nativeSmoothScroll()? <ParticlesBackground /> : null}
      </div>
      {nativeSmoothScroll()? <ParticlesBackground /> : null}
    </>
  )
}

export default IndexPage;