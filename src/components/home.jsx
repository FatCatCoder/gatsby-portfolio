import React from "react";
import '../styles/home.module.scss'
import { StaticImage } from "gatsby-plugin-image"


export default function Home(){
    return(
    <>
    <div className="vh-100 container-fluid m-0 p-0" id="home">
        <div class="row">
          <div class="text-center col-auto mx-auto mt-5">
            <h1 className="display-1 text-center mx-auto col-auto christianclaudeaux">Christian Claudeaux</h1>
            <h3 className="lead fs-4">I'm a fullstack developer, with a passion for creating.</h3>
          </div>
        </div>
        <div className="row">
            <StaticImage className={"avatar-image mx-auto rounded-circle"} style={{borderRadius: '50%'}} transformOptions={{cropFocus: "attention"}} placeholder={"blurred"} quality={100} object-fit={"contain"} layout={"fixed"} width={250} height={250} src={"../images/avatar.jpg"} alt={"avatar"} />
        </div>
      </div>
    </>
    )
}