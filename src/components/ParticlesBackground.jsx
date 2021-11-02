import React from "react"

// styles
import Particles from 'react-particles-js';
import particlesConfig from "../styles/particlesConfig.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import * as DarkTheme from "../styles/darkMode.module.scss" 
import "../styles/global.scss"


export default function ParticlesBackground() {
  const [theme, setTheme] = React.useState(true); // True(light) / False(dark)
  return (
    <>
    <Particles className={`vw-100 vh-100 particles z-behind position-fixed top-0 p-0 m-0 ${theme || DarkTheme.particles}`} params={particlesConfig}/>
    <button className={`btn btn-transparent fs-4 position-fixed top-0 left-0 ${theme? 'text-warning':'text-light'}`} onClick={() => setTheme(!theme)}>
      {theme? <FontAwesomeIcon icon={faSun} />: <FontAwesomeIcon icon={faMoon} />}
    </button>
    </>
  )
}