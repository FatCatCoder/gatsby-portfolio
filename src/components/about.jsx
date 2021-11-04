import React from "react";
import gsap from "gsap";
import useLocoScroll from '../utils/useLocoScroll'
import {useStore} from '../store';
import '../styles/about.module.scss'


export default function About(){
    const myRef = React.useRef(null)
    const myBackdrop = React.useRef(null)

   useLocoScroll();

    const scrollerObject = useStore(state => state.scrollerObject);
    const isScrolling = useStore(state => state.isScrolling)

    console.log(scrollerObject);

    React.useEffect(() => {
        console.log(scrollerObject);
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
            <h3 className="text-start text-light">Greetings,</h3>
            <p className="fs-3 text-light p-2">
                After developing with python in college I moved to javascript and the flourishing community of open source tech projects it boasts.
                 Now I love making the internet a more wonderful place by building exciting web applications. I also compose music, build with micro-controllers, and geek out over espresso.

            </p>
            <h3>I love developing with</h3>
            <div className="row">
                <div className="col-6 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Front End</li>
                        <li className="list-group-item list-color">React</li>
                        <li className="list-group-item list-color">Next.js</li>
                        <li className="list-group-item list-color">Typescript</li>
                        <li className="list-group-item list-color">Bootstrap 5</li>
                        <li className="list-group-item list-color">Sass</li>
                    </ul>
                </div>
                <div className="col-6 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Back End</li>
                        <li className="list-group-item list-color">Node.js</li>
                        <li className="list-group-item list-color">Express</li>
                        <li className="list-group-item list-color">Nginx</li>
                        <li className="list-group-item list-color">PostgreSQL</li>
                        <li className="list-group-item list-color">Redis</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container mx-auto text-center">
            <div className="row">
                <ul className="list-group">
                    <li className="bg-dark text-white list-group-item">Other Tech</li>
                    <li className="list-group-item">REST, GraphQL, Apollo Client v3, Fail2Ban, Ubuntu, MacOS, Windows</li>
                </ul>
            </div>
        </div>
    </div>
    </>
    )
}