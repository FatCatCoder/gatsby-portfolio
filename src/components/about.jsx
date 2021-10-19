import React from "react";

export default function About(){
    return(
    <>
    <div className="vh-100 container m-0 p-0 mx-auto" id="about">
        <h1 className="display-1 text-center text-white">About Me</h1>
        <div className="container mx-auto text-center">
            <h3>I love developing with</h3>
            <div className="row">
                <div className="col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Front End</li>
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Next.js</li>
                        <li className="list-group-item">Gatsby</li>
                        <li className="list-group-item">Typescript</li>
                        <li className="list-group-item">Bootstrap v5</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="list-group fs-3">
                        <li className="list-group-item bg-dark text-white">Back End</li>
                        <li className="list-group-item">Node.js</li>
                        <li className="list-group-item">Express</li>
                        <li className="list-group-item">Nginx</li>
                        <li className="list-group-item">PostgreSQL</li>
                        <li className="list-group-item">Redis</li>
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