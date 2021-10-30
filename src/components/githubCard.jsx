import React from "react"
import AOS from 'aos';
import Fade from 'react-reveal/Fade';
import { useInView } from 'react-intersection-observer'

import { Reveal, Tween } from 'react-gsap';


// data-aos={`fade-${anime}`}
export default function GitHubCard({data, anime}) {
  //console.log('https://raw.githubusercontent.com' + data?.url.split('https://github.com')[1] + '/main/README.md')
  
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // })

  // React.useEffect(()=>{
  //   console.log(inView, entry);
  // },[inView])
  return (
    <>
    {/* ${inView? 'fade-in': 'fade-out'} */}
    {/* <Fade when={inView}> */}
    <Reveal repeat>
      <Tween from={{ opacity: 0 }} duration={2}>
      <div className={`col-12 col-lg-6`}>
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
      </Tween>
    </Reveal>
      {/* </Fade> */}
    </>
  )
}
