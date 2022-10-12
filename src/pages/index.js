import * as React from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import "../styles/styles.css"
import GitHubCard from "../components/githubCard"

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesJson from '../styles/particlesConfig.json'

import { StaticImage } from "gatsby-plugin-image"

import IISvg from '../assets/icons/MicrosoftIIS.svg'
import MSvg from '../assets/icons/Microsoft_Logo.svg'

// graphics & icons
import Lottie from "lottie-react";
import LottieAnimeGreenCircle from '../images/green-circle-pulsing.json';
import LottieAnimeSpaceman from '../images/spaceman-floating.json';
import LottieAnimeGithub from '../images/github-lottie.json';
import LottieAnimeLinkedin from '../images/linkedin-lottie.json';
import LottieAnimeTwitter from '../images/twitter-lottie.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faMobileAlt, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faBlazor, faCSharp, faGraphQL, faNginx, faPostgreSQL, faRedis, faSass, faTypeScript } from "../assets/icons";
library.add(faGraphQL, faNginx, faPostgreSQL, faRedis, faSass, faTypeScript);
dom.watch();

const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const [theme, setTheme] = React.useState(true);
  const [repos, setRepos] = React.useState([]);

  const MainContainer = React.useRef(null);
  const myRef = React.useRef(null)
  const tagLine = React.useRef(null)
  const bodyText = React.useRef(null)

  const getAllRepos = async()=> {
    const fetched = await fetch("https://api.github.com/users/FatCatCoder/repos");
    const jsonData = await fetched.json();
    return jsonData.filter((x) => x.topics.includes("pinned"));
  }

  React.useEffect(async() => {
    setRepos(await getAllRepos());
  }, [])

  React.useEffect(() => {
    // About Me (heading)
    gsap.fromTo(myRef.current, {y: -150, opacity: 0}, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          id: "aboutme",
          trigger: myRef.current,
          start: "-180px center",
          end: "180px center",
          markers: false,
          scrub: true
      }
  });

  gsap.fromTo(tagLine.current, {x: -150, opacity: 0, skewX: 90}, {
      x: 0, skewX: 0,
      opacity: 1,
      scrollTrigger: {
          id: "tagline",
          trigger: tagLine.current,
          start: "-150px center",
          end: "150px center",
          markers: false,
          scrub: true
      }
  });

  gsap.fromTo(bodyText.current, {x: 100, opacity: 0, skewX: -75}, {
      x: 0, skewX: 0,
      opacity: 1,
      scrollTrigger: {
          id: "bodytext",
          trigger: bodyText.current,
          start: "-50px bottom",
          end: "50px center",
          markers: false,
          scrub: true
      }
  });

  ScrollTrigger.refresh();

  return () => {
      ScrollTrigger.getAll().forEach(x => x.kill())
  }
  },[])

  function sizer(){
    if(typeof window !== `undefined` && window?.screen?.width < 750){
      return '6rem';
    }
    else{
      return '8rem'
    }
  }

  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //await console.log(container);
  }, []);

  return (
    <>
    {/* BACKGROUND */}
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticlesJson}
      className={theme? '': 'particlesDark'}
      style={{zIndex: '-1 !important', position: 'fixed', top: 0, height: '100vh', width: '100vw', margin: 0, padding: 0}} />
    <button style={{zIndex: 1}} className={`btn btn-transparent fs-4 position-fixed top-0 left-0 ${theme? 'text-warning':'text-light'}`} onClick={() => setTheme(!theme)}>
      {theme? <FontAwesomeIcon icon={faSun} />: <FontAwesomeIcon icon={faMoon} />}
      <Lottie className={'spaceman'} animationData={LottieAnimeSpaceman} isClickToPauseDisabled={true} height={sizer()} width={sizer()} style={{position: "fixed", top: '0px', left: '10px', zIndex: 0}} />
    </button>


    <div className="container-fluid max-vw-100 min-vh-100" style={{overflowX: 'hidden'}} ref={MainContainer} id="MainContainer">
    {/* HOME */}
    <div className="min-vh-100 w-100 m-0 p-0">
    <nav className={`navbar navbar-expand bg-transparent mx-auto position-absolute start-50 translate-middle-x top-0 mx-auto`} style={{zIndex: 999}}>
            <div className="container mx-auto">
                <button className="navbar-toggler btn text-primary mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <FontAwesomeIcon icon={faCoffee} />
                </button>

                <div className={`collapse navbar-collapse text-center mx-auto`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item mx-auto">
                            <button className="nav-link btn btn-transparent text-white" onClick={(e) => gsap.to(window, {duration: 1.35, scrollTo: document.getElementById("#about").getBoundingClientRect().y})} href="#about">About</button>
                        </li>
                        <li className="nav-item mx-auto">
                            <button className="nav-link btn btn-transparent text-white" onClick={(e) => gsap.to(window, {duration: 1.35, scrollTo: document.getElementById("#portfolio").getBoundingClientRect().y})} to="#portfolio">Portfolio</button>
                        </li>
                        <li className="nav-item mx-auto">
                            <button className="nav-link btn btn-transparent text-white" onClick={(e) => gsap.to(window, {duration: 1.35, scrollTo: document.getElementById("#contact").getBoundingClientRect().y})} to="#contact">Contact</button>
                        </li>
                        <li className="nav-item mx-auto" onClick={() => window.location = `${window.location.origin}/fatcatcoder`}>
                            <a className="nav-link btn btn-transparent bg-transparent text-white" href="/fatcatcoder">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="row stained-glass">
          <div class="text-center col-auto mx-auto mt-5">
            <h1 className="display-1 text-center mx-auto col-auto christianclaudeaux">Christian Claudeaux</h1>
            <h3 className="lead fs-4 text-shadow" style={{textShadow: '1.35px 1.25px 4px black'}}>I'm a fullstack developer, with a passion for creating.</h3>
          </div>
        </div>
        <div className="row">
            <StaticImage className={"avatar-image mx-auto shadow-lg"} style={{borderRadius: '50%'}} transformOptions={{cropFocus: "attention"}} placeholder={"blurred"} quality={100} object-fit={"contain"} layout={"fixed"} resizeMode={"cover"} width={250} height={250}
            src={"../images/avatar2.JPG"} alt={"avatar"} />
        </div>
    </div>

    {/* ABOUT */}
    <div className="min-vh-100 w-100 m-0 p-0" id="#about">
    <h1 ref={myRef} className="display-1 text-center text-white" id="aboutme">About Me</h1>
        <div className={`container mx-auto text-center`}>
            <h4 className="text-start fw-light text-lighter"></h4>
            <div className="row">
                <div class="text-center">
                    <p ref={tagLine} className="fs-2 pt-2"><em>"Building exciting & dynamic web applications <br /> to make the internet a more wonderful place."</em></p>
                </div>
            </div>
            <p ref={bodyText} className="fs-3 text-light p-2">
                Currently a C# developer but I also find my heart in the flourishing community of javascript and open source projects.
                 I also compose music, build with micro-controllers (c++), and geek out over espresso.
                 Mainly interested in building creative and productive platforms and tools.
            </p>
            <h3>I love developing with</h3>
            <div className="row">
                <div className="col-12 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Front End</li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faReact} style={{color: '#61DAFB'}} /> React / Next.js</li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faTypeScript} style={{color: '#007acc'}} /> Typescript</li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faBlazor} style={{color: '#6a237c'}} /> Blazor</li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faBootstrap} style={{color: '#7611F7'}} /> Bootstrap 5 / <FontAwesomeIcon icon={faSass} style={{color: '#CF649A'}} /></li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faGraphQL} style={{color: '#DF34A6'}} /> GraphQL / REST</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Back End</li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faNodeJs} style={{color: '#43853D'}} /> Node.js / Express</li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faNginx} style={{color: '#209237'}} /> Nginx / <MSvg style={{width: 24, margin: 0, padding: 0}}/> <span style={{marginTop: 20}}>IIS</span></li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faPostgreSQL} style={{color: '#336791'}} /> PostgreSQL / <FontAwesomeIcon icon={faRedis} style={{color: '#D82C20'}} /> Redis</li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}><FontAwesomeIcon icon={faCSharp} style={{color: '#6a237c'}} /> .Net Core 6</li>
                        <li className={`list-group-item list-color ${theme? '': 'listItemDark'}`}>
                            <svg className={"mb-1"} width={24} height={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" data-slug-id="azure" viewBox="0 0 256 256">
                                <defs>
                                    <linearGradient id="azure:ab40b385-f958-420f-bfab-714be1677426-1911eec4" x1="-960.606" y1="283.397" x2="-1032.511" y2="70.972" gradientTransform="matrix(1 0 0 -1 1075 318)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#114a8b"/>
                                    <stop offset="1" stop-color="#0669bc"/>
                                    </linearGradient>
                                    <linearGradient id="azure:f40af90d-72eb-49b3-94b2-2510f1071722-7fda9f34" x1="-938.144" y1="184.402" x2="-954.778" y2="178.778" gradientTransform="matrix(1 0 0 -1 1075 318)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-opacity=".3"/>
                                    <stop offset=".071" stop-opacity=".2"/>
                                    <stop offset=".321" stop-opacity=".1"/>
                                    <stop offset=".623" stop-opacity=".05"/>
                                    <stop offset="1" stop-opacity="0"/>
                                    </linearGradient>
                                    <linearGradient id="azure:e382d742-7d51-4974-a256-24e182eef053-ce3aa53d" x1="-947.292" y1="289.594" x2="-868.363" y2="79.308" gradientTransform="matrix(1 0 0 -1 1075 318)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#3ccbf4"/>
                                    <stop offset="1" stop-color="#2892df"/>
                                    </linearGradient>
                                </defs>
                                <path d="M89.158 18.266h69.238L86.523 231.224a11.041 11.041 0 01-10.461 7.51H22.179a11.023 11.023 0 01-10.445-14.548l66.963-198.41a11.04 11.04 0 0110.461-7.51z" fill="url(#azure:ab40b385-f958-420f-bfab-714be1677426-1911eec4)"/>
                                <path d="M189.77 161.104H79.976a5.083 5.083 0 00-3.468 8.8l70.552 65.847a11.091 11.091 0 007.567 2.983h62.167z" fill="#0078d4"/>
                                <path d="M89.158 18.266a10.95 10.95 0 00-10.483 7.654L11.817 224.006a11.01 11.01 0 0010.393 14.728h55.274a11.814 11.814 0 009.069-7.714l13.33-39.29 47.625 44.418a11.267 11.267 0 007.089 2.586h61.937l-27.166-77.63-79.19.018 48.47-142.856z" fill="url(#azure:f40af90d-72eb-49b3-94b2-2510f1071722-7fda9f34)"/>
                                <path d="M177.592 25.764a11.023 11.023 0 00-10.444-7.498H89.984a11.024 11.024 0 0110.445 7.498l66.967 198.421a11.024 11.024 0 01-10.445 14.549h77.164a11.024 11.024 0 0010.444-14.549z" fill="url(#azure:e382d742-7d51-4974-a256-24e182eef053-ce3aa53d)"/>
                            </svg> Azure Cloud</li>
                    </ul>
                </div>
            </div>
            <table className="text-end">
                <tr>
                    <th>
                        <Lottie animationData={LottieAnimeGreenCircle} style={{width: '3rem', height: '3rem'}} isClickToPauseDisabled={true} height={'3rem'} width={"3rem"} />
                    </th>
                    <th style={{fontWeight: 400, textAlign: "start"}}>
                        {/* Always Looking for a project to take on. */}
                        C# Fullstack .Net II Developer @ISF (Remote, USA)
                    </th>
                </tr>
            </table>
            {/* <div className="row">
                <div className="col-12 col-md-12">
                    <ul className="list-group">
                        <li className="bg-dark text-white list-group-item">Other Tech</li>
                        <li className="list-group-item">REST, GraphQL, Apollo Client v3, Fail2Ban, Ubuntu, MacOS, Windows</li>
                    </ul>
                </div>
            </div> */}
        </div>
    </div>

    {/* PORTFOLIO */}
    <div className="min-vh-100 w-100 m-0 p-0" id="#portfolio">
        <h1 className="display-1 text-center text-white mt-5 mb-5">Portfolio</h1>
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-5  mt-5 mb-5">
            {repos.map((x, y) => <GitHubCard data={x} key={y} anime={y % 2} theme={theme} />)}
        </div>
        <div className="row ms-0 me-0 mt-5 custom-card rounded-2">
            <a className={`btn btn-primary my-auto ${theme? '': 'bgPrimaryPurpleDark'}`} href={'https://github.com/FatCatCoder?tab=repositories'}>
                <FontAwesomeIcon icon={faGithubSquare} className={'fs-1'} />
            </a>
        </div>
    </div>

    {/* CONTACT */}
    <div className="min-vh-100 w-100 m-0 p-0">
    <div className="middle container mx-auto text-center my-auto" id="#contact">
            <div className="row">
                {/* <h1 className="display-1 text-center">Contact</h1> */}
                <h4><em>Lets see what we can build together</em></h4>
                <div className="fs-4">
                    <p className="fs-8"><FontAwesomeIcon icon={faEnvelope} /> christianclaudeaux@gmail.com</p>
                    <a className="text-decoration-none text-light" href="teL:9414058529"><FontAwesomeIcon icon={faMobileAlt} /> 941-405-8529</a>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mx-auto text-center">
                    <a className="btn btn-github text-decoration-none col-4" href="https://github.com/FatCatCoder">
                        <Lottie animationData={LottieAnimeGithub} isClickToPauseDisabled={true} height={'6rem'} width={'6rem'} style={{filter: 'invert(100%)', height: '6rem', width: '6rem'}} />
                    </a>
                    <a className="btn btn-linkedin text-decoration-none col-4" href="https://www.linkedin.com/in/christian-claudeaux-006479225">
                        <Lottie animationData={LottieAnimeLinkedin} isClickToPauseDisabled={true} height={'6rem'} width={'6rem'} style={{filter: 'invert(100%)', height: '6rem', width: '6rem'}} />
                    </a>
                    <a className="btn btn-linkedin text-decoration-none col-4" href="https://twitter.com/CClaudeaux">
                        <Lottie animationData={LottieAnimeTwitter} isClickToPauseDisabled={true} height={'6rem'} width={'6rem'} style={{filter: 'invert(100%)', height: '6rem', width: '6rem'}} />
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="stained-glass mb-2 text-center position-relative bottom-0">
        <a className="text-decoration-none text-light" href="https://github.com/FatCatCoder/gatsby-portfolio"> <FontAwesomeIcon icon={faCodeBranch} /> fork this site! <br /> Christian Claudeaux @2022</a>
    </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
