import React from "react";
import '../styles/about.module.scss'

export default function About(){
    return(
    <>
    <div className="min-vh-100 container m-0 p-0 mx-auto" id="about">
        <h1 className="display-1 text-center text-white">About Me</h1>
        <div className="container mx-auto text-center">
            <h3>Hello there.</h3>
            <p className="fs-3 border-start border-3 p-2">I love making the internet a more wonderful place by building exciting web applications. After developing with python in college I moved to javascript and the flourishing community of open source tech projects it boasts. I now ...  </p>
            <h3>I love developing with</h3>
            <div className="row">
                <div className="col-6 col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Front End</li>
                        <li className="list-group-item list-color">React</li>
                        <li className="list-group-item list-color">Next.js</li>
                        <li className="list-group-item list-color">Gatsby</li>
                        <li className="list-group-item list-color">Typescript</li>
                        <li className="list-group-item list-color">Bootstrap v5</li>
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