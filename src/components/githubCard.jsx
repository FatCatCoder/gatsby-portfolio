import React from "react"
import gsap from "gsap";
// import formatDate from "../utils/formatDate";

export default function GitHubCard({data, anime, theme}) {
  const cardRef = React.useRef(null)

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
        <div className={`card text-center h-100 custom-card  ${theme || 'cardDark'} rounded-2 overflow-hidden`}>
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">{data?.name}</h5>
            <p className="card-text">
              {data?.description}
            </p>
            <div className="row mx-auto col-6 col-md-4">
              <a href={data?.url} className={`btn btn-primary mx-auto ${theme? '': 'bgPrimaryPurpleDark'}`}>
                Source Code
              </a>
            </div>
            {data?.homepage?
              <div className="row mx-auto col-6 col-md-4 mt-2">
                <a href={data?.homepage} className={`btn btn-primary mx-auto ${theme? '': 'bgPrimaryPurpleDark'}`}>
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
          <div className="card-footer text-muted">created @ {new Date(data?.created_At).toDateString()}</div>
        </div>
      </div>
    </>
  )
}
