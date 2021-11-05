import React from "react";
import Lottie from "react-lottie";
import LottieAnimeGithub from '../images/github-lottie.json';
import LottieAnimeLinkedin from '../images/linkedin-lottie.json';

export default function Contact(){
    const defaultOptions = (x) => {
       const data = { 
        loop: true,
        autoplay: true,
        animationData: x,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
       }
       return data;
        };
    return(
    <>
    <div data-scroll-section className="vh-100 row m-0 p-0" id="contact">
        <div className="row mx-auto text-center">
        <h1 className="display-1 text-center">Contact</h1>
            <h4>Lets see what we can build together</h4>
            <Lottie options={defaultOptions(LottieAnimeGithub)} isClickToPauseDisabled={true} height={'5rem'} width={'5rem'} style={{height: "8rem", width: '8rem'}} />
            <Lottie options={defaultOptions(LottieAnimeLinkedin)} isClickToPauseDisabled={true} height={'5rem'} width={'5rem'} style={{height: "8rem", width: '8rem'}} />
        </div>
    </div>
    </>
    )
}