import React from "react";
import gsap from "gsap";
import useLocoScroll from '../utils/useLocoScroll'
import {useStore} from '../store';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IISvg from '../assets/icons/MicrosoftIIS.svg'
import MSvg from '../assets/icons/Microsoft_Logo.svg'

// styles 
import '../styles/about.module.scss'
import * as DarkTheme from "../styles/darkMode.module.scss" 

// graphics & icons
import Lottie from "react-lottie";
import LottieAnime from '../images/green-circle-pulsing.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBlazor, faCSharp, faGraphQL, faNginx, faPostgreSQL, faRedis, faSass, faTypeScript } from "../assets/icons";

library.add(faGraphQL, faNginx, faPostgreSQL, faRedis, faSass, faTypeScript);
dom.watch();


export default function About(){
    gsap.registerPlugin(ScrollTrigger)
    
    const myRef = React.useRef(null)
    const tagLine = React.useRef(null)
    const bodyText = React.useRef(null)

//    useLocoScroll();

    // const scrollerObject = useStore(state => state.scrollerObject);
    // const isScrolling = useStore(state => state.isScrolling)
    const globalTheme = useStore(state=> state.theme);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieAnime,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
        };

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
    }, [])

    return(
    <>
    <div className="min-vh-100 container m-0 p-0 mx-auto" id="about">

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
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faReact} style={{color: '#61DAFB'}} /> React / Next.js</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faTypeScript} style={{color: '#007acc'}} /> Typescript</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faBlazor} style={{color: '#6a237c'}} /> Blazor</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faBootstrap} style={{color: '#7611F7'}} /> Bootstrap 5 / <FontAwesomeIcon icon={faSass} style={{color: '#CF649A'}} /></li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faGraphQL} style={{color: '#DF34A6'}} /> GraphQL / REST</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Back End</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faNodeJs} style={{color: '#43853D'}} /> Node.js / Express</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faNginx} style={{color: '#209237'}} /> Nginx / <MSvg style={{width: 24, margin: 0, padding: 0}}/> <span style={{marginTop: 20}}>IIS</span></li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faPostgreSQL} style={{color: '#336791'}} /> PostgreSQL / <FontAwesomeIcon icon={faRedis} style={{color: '#D82C20'}} /> Redis</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faCSharp} style={{color: '#6a237c'}} /> .Net Core 6</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}>
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
                        <Lottie isClickToPauseDisabled={true} options={defaultOptions} height={'3rem'} width={"3rem"} />
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
    </>
    )
}