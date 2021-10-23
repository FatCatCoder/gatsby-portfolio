import React from "react"
import AOS from 'aos';
import Fade from 'react-reveal/Fade';


// data-aos={`fade-${anime}`}
export default function GitHubCard({props, anime}) {
  return (
    <>
      <div className="col-12 col-lg-6" data-aos={`fade`}>
        <div className="card text-center h-100 bg-white custom-card">
          <div className="card-header bg-white">Featured</div>
          <div className="card-body">
            <h5 className="card-title">{props?.title}</h5>
            <p className="card-text">
              {props?.about}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </>
  )
}
