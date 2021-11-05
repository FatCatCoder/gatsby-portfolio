import React from "react"
import gsap from "gsap";
import useLocoScroll from '../utils/useLocoScroll'

export default function GitHubCard({data}) {
  const cardRef = React.useRef(null)
  useLocoScroll();
  function calcDate(){
    const today = new Date().toLocaleDateString() ;
    const updated = new Date(data?.pushedAt).toLocaleDateString();
    const daysAgo = Math.floor(Date.parse(today) - Date.parse(updated)) / 86400000;
    if (!daysAgo){
      return updated
    }
    return daysAgo + ' Days ago'
  }
  React.useEffect(() => {
      gsap.fromTo(cardRef.current, {y: -50, opacity: 0}, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
              id: "portfolioCard",
              trigger: cardRef.current,
              start: "top bottom",
              end: "bottom center",
              markers: true,
              scrub: true
          }
      });
  }, [])

  return (
    <>
      <div ref={cardRef} id="portfolioCard" className={`portfolioCard col-12 col-lg-6`}>
        <div className="card text-center h-100 custom-card rounded-pill overflow-hidden">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">{data?.name}</h5>
            <p className="card-text">
              {data?.description}
            </p>
            <div className="row mx-auto col-6 col-md-4">
              <a href={data?.url} className="btn btn-primary mx-auto">
                Source Code
              </a>
            </div>
            {data?.homepageUrl?
              <div className="row mx-auto col-6 col-md-4 mt-2">
                <a href={data?.homepageUrl} className="btn btn-primary mx-auto">
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
          <div className="card-footer text-muted">updated@ {calcDate()}</div>
        </div>
      </div>
    </>
  )
}
