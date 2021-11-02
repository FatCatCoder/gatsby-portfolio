import React from "react"
import gsap from "gsap";
import useLocoScroll from '../utils/useLocoScroll'

export default function GitHubCard({data}) {
  const cardRef = React.useRef(null)
  useLocoScroll();
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
  
  //console.log('https://raw.githubusercontent.com' + data?.url.split('https://github.com')[1] + '/main/README.md')
  return (
    <>
      <div ref={cardRef} id="portfolioCard" className={`portfolioCard col-12 col-lg-6`}>
        <div className="card text-center h-100 bg-white custom-card">
          <div className="card-header bg-white">Featured</div>
          <div className="card-body">
            <h5 className="card-title">{data?.name}</h5>
            <p className="card-text">
              {data?.description}
            </p>
            <a href={data?.url} className="btn btn-primary">
              See the Source Code
            </a>
            {data?.homepageURL?
            <a href={data?.homepageURL} className="btn btn-primary">
            See the Demo
            </a>
            :
            null
            }
            <p className="card-text">
              {data?.languages?.nodes.map(x => x.name).join(', ')}
            </p>
          </div>
          <div className="card-footer text-muted">updated@ {new Date(data?.pushedAt).toLocaleString() + ' EST'}</div>
        </div>
      </div>
    </>
  )
}
