import React from "react";
import gsap from "gsap";
import useLocoScroll from '../utils/useLocoScroll'
import {useStore} from '../store';

// styles 
import '../styles/about.module.scss'
import * as DarkTheme from "../styles/darkMode.module.scss" 

// graphics & icons
import Lottie from "react-lottie";
import LottieAnime from '../images/green-circle-pulsing.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGraphQL, faNginx, faPostgreSQL, faRedis, faSass, faTypeScript } from "../assets/icons";

library.add(faGraphQL, faNginx, faPostgreSQL, faRedis, faSass, faTypeScript);
dom.watch();


export default function About(){
    const myRef = React.useRef(null)
    const tagLine = React.useRef(null)
    const bodyText = React.useRef(null)

//    useLocoScroll();

    const scrollerObject = useStore(state => state.scrollerObject);
    const isScrolling = useStore(state => state.isScrolling)
    const globalTheme = useStore(state=> state.theme);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieAnime,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
        };

    React.useEffect(() => {
        console.log(window.scroll);
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
    })

    return(
    <>
    <div data-scroll-section className="min-vh-100 container m-0 p-0 mx-auto" id="about">

        <h1 ref={myRef} className="display-1 text-center text-white" id="aboutme">About Me</h1>
        <div className={`container mx-auto text-center shadow ${isScrolling? '': 'stained-glass'}`}>
            <h4 className="text-start fw-light text-lighter">Hello There,</h4>
            <div className="row">
                <div class="text-center">
                    <p ref={tagLine} className="fs-2"><em>"Building exciting & dynamic web applications <br /> to make the internet a more wonderful place."</em></p>
                </div>
            </div>
            <p ref={bodyText} className="fs-3 text-light p-2">
                I find my heart in the flourishing community of javascript and open source projects it boasts.
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
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5 / <FontAwesomeIcon icon={faSass} style={{color: '#CF649A'}} /></li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faGraphQL} style={{color: '#DF34A6'}} /> GraphQL / REST</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Back End</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faNodeJs} style={{color: '#43853D'}} /> Node.js / Express</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faNginx} style={{color: '#209237'}} /> Nginx</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faPostgreSQL} style={{color: '#336791'}} /> PostgreSQL</li>
                        <li className={`list-group-item list-color ${globalTheme? '': DarkTheme.listItemDark}`}><FontAwesomeIcon icon={faRedis} style={{color: '#D82C20'}} /> Redis</li>
                    </ul>
                </div>
            </div>
            <table className="text-end">
                <tr>
                    <th>
                        <Lottie isClickToPauseDisabled={true} options={defaultOptions} height={'3rem'} width={"3rem"} />
                    </th>
                    <th style={{fontWeight: 400}}>
                        Looking for the next project to take on.
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