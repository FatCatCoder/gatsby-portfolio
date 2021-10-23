// plugins
import * as React from "react"
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Layout from '../components/Layout';
import SmoothScroll from '../components/SmoothScroll';

// styles
import Particles from 'react-particles-js';
import particlesConfig from "../styles/particlesConfig.json"
import "../styles/global.scss"

import Navbar from '../components/Navbar.jsx';
import Sidebar from "../components/sidebar.js";

import SmoothScrollBar from "../testing/SmoothScrollBar";
import AOS from "aos";
import "aos/dist/aos.css";


const IndexPage = () => {
  // if (typeof window !== "undefined") {
  //   gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  // }

  function nativeSmoothScroll() {
    const userPlatform = window?.navigator?.userAgentData?.platform || window?.navigator?.platform || 'disable-smooth-scroll';
    const nativeSmoothScrollPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'iPhone', 'iPad', 'iPod'];
  
    return nativeSmoothScrollPlatforms.includes(userPlatform)
  }

  const myContent = React.useRef();
  React.useEffect(() => {
    AOS.init();
    if(!nativeSmoothScroll()){
      SmoothScroll(myContent.current)
    }
  }, [])

  // <SmoothScrollBar></SmoothScrollBar>

  return (
    <>
    <Navbar />
    <div ref={myContent} className="container-fluid">
      <Layout />
    </div>
    <Particles className="vh-100 particles z-behind position-fixed top-0 p-0 m-0" params={particlesConfig}/>
    </>
  )
}

export default IndexPage;


/*

  {!nativeSmoothScroll()?
        <>
      <Navbar />
      <div ref={myContent} className="container-fluid">
        <Layout />
      </div>
      <Particles className="vh-100 particles z-behind position-fixed top-0 p-0 m-0" params={particlesConfig}/>
      </>
      
      :
        <>
      <Navbar />
      <Sidebar />
      <div ref={myContent} className="container-fluid">
        <Layout />
      </div>
      <Particles className="vh-100 particles z-behind position-fixed top-0 p-0 m-0" params={particlesConfig}/>
      </>
    }

*/