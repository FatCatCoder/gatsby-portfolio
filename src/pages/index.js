import * as React from "react"

// components
import Layout from '../components/Layout';
import Navbar from '../components/Navbar.jsx';
import Sidebar from "../components/sidebar.js";
import Lottie from "react-lottie";
import LottieAnime from '../images/spaceman-floating.json';

// utils
import useLocoScroll from "../utils/useLocoScroll";

// styles
import ParticlesBackground from '../components/ParticlesBackground'
import "../styles/global.scss"

import {useStore} from '../store';
import nativeSmoothScroll from "../utils/nativeSmoothScroll";

const IndexPage = () => {
 // useLocoScroll();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieAnime,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
      }
    };

  return(
    <>
    <Navbar />
    {nativeSmoothScroll()?<Lottie options={defaultOptions} height={'8rem'} width={'8rem'} style={{position: "fixed", top: '0px', left: '0px'}} />:null}
      <div data-scroll-container className="main-container container-fluid bg-transparent" id="main-container" style={{willChange: 'transform'}}>
      {!nativeSmoothScroll()?<Lottie options={defaultOptions} height={'8rem'} width={'8rem'} style={{position: "fixed", top: '0px', left: '0px'}} />:null}
        <Layout />
        {!nativeSmoothScroll()? <ParticlesBackground /> : null}
      </div>
      {nativeSmoothScroll()? <ParticlesBackground /> : null}
    </>
  )
}

export default IndexPage;