// plugins
import * as React from "react"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Layout from '../components/Layout';
import Navbar from '../components/Navbar.jsx';
import Sidebar from "../components/sidebar.js";

// styles
import Particles from 'react-particles-js';
import particlesConfig from "../styles/particlesConfig.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import * as DarkTheme from "../styles/darkMode.module.scss" 
import "../styles/global.scss"



function NonNative({theme}){
  const myContent = React.useRef();
  let scrollOptions = {smooth: true, lerp: 0.05, multiplier: 1, containerRef: myContent, tablet: {smooth: false}, smartphone: {smooth: false}};

  return(
    <>
    <LocomotiveScrollProvider options={scrollOptions}>
      <Navbar />
      <div ref={myContent} data-scroll-container className="container-fluid">
        <Layout />
      </div>
      <Particles className={`vw-100 vh-100 particles z-behind position-fixed top-0 p-0 m-0 ${theme || DarkTheme.particles}`} params={particlesConfig}/>
    </LocomotiveScrollProvider>
    </>
  )
}

function Native({theme}){
  return(
    <>
      <Navbar />
      <div className="container-fluid">
        <Layout />
      </div>
      <Particles className={`vw-100 vh-100 particles z-behind position-fixed top-0 p-0 m-0 ${theme || DarkTheme.particles}`} params={particlesConfig}/>
    </>
  )
}

function nativeSmoothScroll() {
  const userPlatform = window?.navigator?.userAgentData?.platform || window?.navigator?.platform || 'disable-smooth-scroll';
  const nativeSmoothScrollPlatforms = ['Macintosh', 'macOS', 'MacIntel', 'MacPPC', 'Mac68K', 'iPhone', 'iPad', 'iPod'];
  return nativeSmoothScrollPlatforms.includes(userPlatform)
}

const IndexPage = () => {
  // if (typeof window !== "undefined") {
  //   gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  // }
  let [theme, setTheme] = React.useState(true); // True(light) / False(dark)

  return(
    <>
    {nativeSmoothScroll()? <Native theme={theme}/> : <NonNative theme={theme}/> }
    <button className={`btn btn-transparent fs-4 position-fixed top-0 left-0 ${theme? 'text-warning':'text-light'}`} onClick={() => setTheme(!theme)}>{theme? <FontAwesomeIcon icon={faSun} />: <FontAwesomeIcon icon={faMoon} />}</button>
    </>
  )
}

export default IndexPage;
