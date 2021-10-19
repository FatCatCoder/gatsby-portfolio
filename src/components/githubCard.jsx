import React from "react"

export default function GitHubCard({props}) {
    console.log(props)
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Featured</div>
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
    </>
  )
}
