import React from "react"
import gsap from "gsap";
import useLocoScroll from '../utils/useLocoScroll'
import formatDate from "../utils/formatDate";
import {useStore} from '../store'
import * as DarkTheme from "../styles/darkMode.module.scss" 

export default function GitHubCard({data, anime}) {
  const globalTheme = useStore(state=> state.theme);
  const cardRef = React.useRef(null)
  // useLocoScroll();

  React.useEffect(() => {
      gsap.fromTo(cardRef.current, {y: -50, x: anime? 150: -150, opacity: 0}, {
          y: 0, x: 0,
          opacity: 1,
          scrollTrigger: {
              id: "portfolioCard",
              trigger: cardRef.current,
              start: "top bottom",
              end: "bottom center",
              markers: false,
              scrub: true
          }
      });
  })

  return (
    <>
      <div ref={cardRef} id="portfolioCard" className={`portfolioCard col-12 col-lg-6`}>
        <div className={`card text-center h-100 custom-card  ${globalTheme || DarkTheme.cardDark} rounded-2 overflow-hidden`}>
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">{data?.name}</h5>
            <p className="card-text">
              {data?.description}
            </p>
            <div className="row mx-auto col-6 col-md-4">
              <a href={data?.url} className={`btn btn-primary mx-auto ${globalTheme? '': DarkTheme.bgPrimaryPurple}`}>
                Source Code
              </a>
            </div>
            {data?.homepageUrl?
              <div className="row mx-auto col-6 col-md-4 mt-2">
                <a href={data?.homepageUrl} className={`btn btn-primary mx-auto ${globalTheme? '': DarkTheme.bgPrimaryPurple}`}>
                  Demo
                </a>
              </div>
              :
              null
            }
            <p className="card-text">
              <em>{data?.languages?.nodes.map(x => x.name).join(', ')}</em>
            </p>
          </div>
          <div className="card-footer text-muted">created @ {new Date(data?.createdAt).toDateString()}</div>
        </div>
      </div>
    </>
  )
}
