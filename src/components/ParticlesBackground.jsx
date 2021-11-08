import React from "react"

// styles
import Particles from 'react-particles-js';
import particlesConfig from "../styles/particlesConfig.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import * as DarkTheme from "../styles/darkMode.module.scss" 
import "../styles/global.scss"

import Lottie from "react-lottie";
import LottieAnime from '../images/spaceman-floating.json';


export default function ParticlesBackground() {
  const [theme, setTheme] = React.useState(true); // True (light) / False (dark)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieAnime,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    function sizer(){
      console.log(window.screen.width);
      if(window.screen.width < 750){
        return '6rem';
      }
      else{
        return '8rem' 
      }
    }
  return (
    <>
    <Particles className={`vw-100 vh-100 particles z-behind position-fixed top-0 start-0 p-0 m-0 ${theme || DarkTheme.particles}`} params={particlesConfig}/>
    <button style={{zIndex: 0}} className={`btn btn-transparent fs-4 position-fixed top-0 left-0 ${theme? 'text-warning':'text-light'}`} onClick={() => setTheme(!theme)}>
      {theme? <FontAwesomeIcon icon={faSun} />: <FontAwesomeIcon icon={faMoon} />}
      <Lottie className={'spaceman'} options={defaultOptions} isClickToPauseDisabled={true} height={sizer()} width={sizer()} style={{position: "fixed", top: '0px', left: '0px', zIndex: -1}} />
    </button>
    </>
  )
}