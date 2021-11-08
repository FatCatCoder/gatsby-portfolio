import * as React from "react"

// components
import Layout from '../components/Layout';

// utils
import nativeSmoothScroll from "../utils/nativeSmoothScroll";
import isMobile from "../utils/isMobile";

// styles
import ParticlesBackground from '../components/ParticlesBackground'
import "../styles/global.scss"

const IndexPage = () => {
//${isMobile() === 0? 'yeah': 'no'} ${window?.screen?.orientation}, ${window?.navigator?.maxTouchPoints}, ${window?.navigator?.platform}, ${window?.navigator?.userAgent}
  return(
    <>
      <div data-scroll-container className="main-container container-fluid bg-transparent position-relative" id="main-container">
        <Layout />
        {!isMobile()? <ParticlesBackground /> : null}
      </div>
      {isMobile()? <ParticlesBackground /> : null}
    </>
  )
}

export default IndexPage;