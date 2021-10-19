import React from "react";
import GitHubCard from './githubCard';

export default function Portfolio(){
    const data = [1,2,3,4,5,6].fill({"title": "Gatsby portfolio", "about": "cool project made with gatsby"});
    return(
    <>
    <div className="min-vh-100 container m-0 p-0 text-center mx-auto" id="portfolio">
        <h1 className="display-1 text-center">Portfolio</h1>
        <div className="row row-cols-lg-2">
            {data.map(x => <GitHubCard props={x} />)}
        </div>
    </div>
    </>
    )
}