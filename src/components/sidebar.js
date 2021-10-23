import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircle, fasCircle } from '@fortawesome/free-solid-svg-icons'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Sidebar(){
    return(
    <>
        {/* <button class="nav-btn bg-transparent border-0 z-front float-start position-absolute col top-0 left-0 h-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <FontAwesomeIcon icon={faChevronRight} /> </button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Navigation</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>Hello</p>
                <p>About Me</p>
                <p>Portfolio</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </div> */}

        <nav class="nav flex-column position-fixed top-0 vh-100">
            <button onClick={() => {console.log('yuh'); gsap.to(window, {duration: 2, scrollTo: "#home"});}} class="nav-link fs-3 my-auto active" aria-current="page" href="#home"><FontAwesomeIcon icon={faCircle} /></button>
            <button onClick={() => gsap.to(window, {duration: 2, scrollTo: "#about"})} class="nav-link fs-3 my-auto" href="#about"><FontAwesomeIcon icon={faCircle} /></button>
            <button onClick={() => gsap.to(window, {duration: 2, scrollTo: "#portfolio"})} class="nav-link fs-3 my-auto" href="#portfolio"><FontAwesomeIcon icon={faCircle} /></button>
            <button onClick={() => gsap.to(window, {duration: 2, scrollTo: "#someID"})} class="nav-link fs-3 my-auto" href="#"><FontAwesomeIcon icon={faCircle} /></button>
            <button onClick={() => gsap.to(window, {duration: 2, scrollTo: "#someID"})} class="nav-link fs-3 my-auto" href="#" tabindex="-1" aria-disabled="false"><FontAwesomeIcon icon={faCircle} /></button>
        </nav>
        </>
    )
}