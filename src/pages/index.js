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

const IndexPage = () => {
  useLocoScroll();
  const scrollerObject = useStore(state => state.scrollerObject)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieAnime,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
      }
    };
    console.log(scrollerObject);

  return(
    <>
    <Navbar />
    
      <div data-scroll-container className="main-container container-fluid" id="main-container" style={{willChange: 'transform'}}>
        <Lottie options={defaultOptions} height={150} width={150} style={{position: "fixed", top: '0px', left: '0px'}} />
        <Layout />
        <ParticlesBackground />
      </div>
    
    </>
  )
}

export default IndexPage;