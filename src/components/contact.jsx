import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import Lottie from "react-lottie";
import LottieAnimeGithub from '../images/github-lottie.json';
import LottieAnimeLinkedin from '../images/linkedin-lottie.json';
import LottieAnimeTwitter from '../images/twitter-lottie.json';

export default function Contact(){
    const defaultOptions = (x) => {
       return { 
            loop: true,
            autoplay: true,
            animationData: x,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
        }
    };
    return(
    <>
    <div data-scroll-section className="vh-100 row m-0 p-0" id="contact" style={{overflow: "hidden"}}>
        <div className="row mx-auto text-center my-auto">
            <div className="container">
                {/* <h1 className="display-1 text-center">Contact</h1> */}
                <h4><em>Lets see what we can build together</em></h4>
                <div className="fs-4">
                    <p className=""><FontAwesomeIcon icon={faEnvelope} /> christianclaudeaux@gmail.com</p>
                    <a className="text-decoration-none text-light" href="teL:9414058529"><FontAwesomeIcon icon={faMobileAlt} /> 941-405-8529</a>
                </div>
                <div className="col-10 col-md-6 col-lg-4 col-xl-4 mx-auto text-center">
                    <a className="btn btn-github text-decoration-none col-4" href="https://github.com/FatCatCoder">
                        <Lottie options={defaultOptions(LottieAnimeGithub)} isClickToPauseDisabled={true} height={'8rem'} width={'8rem'} style={{filter: 'invert(100%)'}} />
                    </a>
                    <a className="btn btn-linkedin text-decoration-none col-4" href="https://www.linkedin.com/in/christian-claudeaux-006479225">
                        <Lottie options={defaultOptions(LottieAnimeLinkedin)} isClickToPauseDisabled={true} height={'8rem'} width={'8rem'} style={{filter: 'invert(100%)'}} />
                    </a>
                    <a className="btn btn-linkedin text-decoration-none col-4" href="https://twitter.com/CClaudeaux">
                        <Lottie options={defaultOptions(LottieAnimeTwitter)} isClickToPauseDisabled={true} height={'8rem'} width={'8rem'} style={{filter: 'invert(100%)'}} />
                    </a>
                </div>
            </div>
        </div>
        <div className="row position-absolute bottom-0 mb-2 text-center">
            <a className="text-decoration-none text-light" href="https://github.com/FatCatCoder/gatsby-portfolio"> <FontAwesomeIcon icon={faCodeBranch} /> fork this site! <br /> Christian Claudeaux @2022</a>
        </div>
    </div>
    </>
    )
}