import * as React from "react"

// components
import Layout from '../components/Layout';
import Navbar from '../components/Navbar.jsx';
import Sidebar from "../components/sidebar.js";

// utils
import useLocoScroll from "../utils/useLocoScroll";

// styles
import ParticlesBackground from '../components/ParticlesBackground'
import "../styles/global.scss"

const IndexPage = () => {
  useLocoScroll();
  return(
    <>
    <Navbar />
      <div data-scroll-container className="main-container container-fluid" id="main-container">
        <Layout />
      </div>
    <ParticlesBackground />
    </>
  )
}

export default IndexPage;