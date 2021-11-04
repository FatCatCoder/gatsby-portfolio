import React from "react";
import GitHubCard from './githubCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import JSONdata from '../content/github.json';
import '../styles/portfolio.module.scss';


export default function Portfolio(){
    return(
    <>
    <div data-scroll-section className="min-vh-100 container m-0 p-0 text-center mx-auto" id="portfolio">
        <h1 className="display-1 text-center text-white shadow stained-glass mt-5 mb-5">Portfolio</h1>
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-5  mt-5 mb-5">
            {JSONdata?.data?.user?.pinnedItems?.nodes.map((x, y) => <GitHubCard data={x} key={y} anime={y % 2? 'left':'right'} />)}
        </div>
        <div className="row ms-0 me-0 mt-5 custom-card rounded-2">
            <button className="btn btn-primary my-auto">
                <FontAwesomeIcon icon={faGithubSquare} className={'fs-1'} />
            </button>
        </div>
    </div>
    </>
    )
}