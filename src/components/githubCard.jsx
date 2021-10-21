import React from "react"

export default function GitHubCard({props}) {
    console.log(props)
  return (
    <>
      <div className="col">
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
