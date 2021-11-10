import React from "react";
import GitHubCard from './githubCard';
import {useStore} from '../store';
// import JSONdata from '../content/github.json';
import BuildData from '../content/BuildData';

// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import * as DarkTheme from "../styles/darkMode.module.scss" 
import '../styles/portfolio.module.scss';

export default function Portfolio(){
    const globalTheme = useStore(state=> state.theme);
    const [repos, setRepos] = React.useState(BuildData);

    // React.useEffect(() => {
    //    async function fetching(){
    //     const data = await fetch('https://api.github.com/graphql', {
    //       method: "POST",
    //       headers: {"Content-type": "application/json", "Authorization": "bearer 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"},
    //       body: JSON.stringify({
    //         query: `query { 
    //           user(login: "FatCatCoder"){
    //             pinnedItems(first: 6){
    //               nodes{
    //                 ... on Repository{
    //                   name
    //                   url
    //                   homepageUrl
    //                   createdAt
    //                   updatedAt
    //                   pushedAt
    //                   stargazerCount
    //                   description
    //                   languages(first: 3){
    //                     nodes{
    //                       ... on Language{
    //                         name
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }`
    //       })
    //     })
    //     const {data: {user: {pinnedItems: {nodes}}}} = await data.json();
    //     if(nodes){
    //       setRepos(nodes);
    //     }
    //   }
    //   fetching()
    // }, [])

    return(
    <>
    <div data-scroll-section className={`min-vh-100 container m-0 p-0 text-center mx-auto`} id="portfolio">
        <h1 className="display-1 text-center text-white mt-5 mb-5">Portfolio</h1>
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-5  mt-5 mb-5">
            {repos.map((x, y) => <GitHubCard data={x} key={y} anime={y % 2} />)}
        </div>
        <div className="row ms-0 me-0 mt-5 custom-card rounded-2">
            <a className={`btn btn-primary my-auto ${globalTheme? '': DarkTheme.bgPrimaryPurple}`} href={'https://github.com/FatCatCoder?tab=repositories'}>
                <FontAwesomeIcon icon={faGithubSquare} className={'fs-1'} />
            </a>
        </div>
    </div>
    </>
    )
}