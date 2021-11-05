import React from "react";
import gsap from "gsap";
import useLocoScroll from '../utils/useLocoScroll'
import {useStore} from '../store';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import '../styles/about.module.scss'

import Lottie from "react-lottie";
import LottieAnime from '../images/green-circle-pulsing.json';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGraphQL, faNginx, faPostgreSQL, faRedis, faSass, faTypeScript } from "../assets/icons";
library.add(faGraphQL, faNginx, faPostgreSQL, faRedis, faSass, faTypeScript);
dom.watch();


export default function About(){
    const myRef = React.useRef(null)
    const myBackdrop = React.useRef(null)
    const diceText = React.useRef(null)

   useLocoScroll();

    const scrollerObject = useStore(state => state.scrollerObject);
    const isScrolling = useStore(state => state.isScrolling)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieAnime,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
        };

    function factGen(){
        const facts = [
            "I Love riding and maintaining my 1983 yamaha virago",
            "Out sailing catamarans when ever I can",
            "Building DIY projects such as a kyoto drip tower powered by arduino in my free time",
            "I cook a delicious indian curry",
            "Love python",
            "Cigars, whiskey and many other expensive habits to feed..."
        ];
        diceText.current.innerHTML = facts[Math.floor(Math.random()*facts.length)]
    }

    React.useEffect(() => {
        gsap.fromTo(myRef.current, {y: -50, opacity: 0}, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                id: "aboutme",
                trigger: myRef.current,
                start: "-80px center",
                end: "80px center",
                markers: true,
                scrub: true
            }
        });
    }, [])

    return(
    <>
    <div data-scroll-section className="min-vh-100 container m-0 p-0 mx-auto" id="about">

        <h1 ref={myRef} className="display-1 text-center text-white" id="aboutme">About Me</h1>
        <div ref={myBackdrop} className={`container mx-auto text-center shadow ${isScrolling? '': 'stained-glass'}`}>
            <h4 className="text-start text-light">Hello There,</h4>
            <div className="row">
                <div class="text-center">
                    <p className="fs-2"><em>"Building exciting & dynamic web applications <br /> to make the internet a more wonderful place."</em></p>
                </div>
            </div>
            <p className="fs-3 text-light p-2">
                I find my heart in the flourishing community of javascript and open source projects it boasts.
                 I also compose music, build with micro-controllers (c++), and geek out over espresso.
                 Mainly interested in building creative and productive platforms and tools.
            </p>
            <h3>I love developing with</h3>
            <div className="row">
                <div className="col-12 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Front End</li>
                        <li className="list-group-item list-color"><FontAwesomeIcon icon={faReact} style={{color: '#61DAFB'}} /> React / Next.js</li>
                        <li className="list-group-item list-color"><FontAwesomeIcon icon={faTypeScript} style={{color: '#007acc'}} /> Typescript</li>
                        <li className="list-group-item list-color"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5 / <FontAwesomeIcon icon={faSass} style={{color: '#CF649A'}} /></li>
                        <li className="list-group-item list-color"><FontAwesomeIcon icon={faGraphQL} style={{color: '#DF34A6'}} /> GraphQL / REST</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Back End</li>
                        <li className="list-group-item list-color"><FontAwesomeIcon icon={faNodeJs} style={{color: '#43853D'}} /> Node.js / Express</li>
                        <li className="list-group-item list-color"><FontAwesomeIcon icon={faNginx} style={{color: '#209237'}} /> Nginx</li>
                        <li className="list-group-item list-color"><FontAwesomeIcon icon={faPostgreSQL} style={{color: '#336791'}} /> PostgreSQL</li>
                        <li className="list-group-item list-color"><FontAwesomeIcon icon={faRedis} style={{color: '#D82C20'}} /> Redis</li>
                    </ul>
                </div>
            </div>
            <table className="text-end">
                <tr>
                    <th>
                        <Lottie options={defaultOptions} height={'3rem'} width={"3rem"} />
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