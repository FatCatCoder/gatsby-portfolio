import React from "react"
import { graphql } from "gatsby"

import ParticlesBackground from '../../components/ParticlesBackground'
import "../../styles/global.scss"

export default function Template({data}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
    <div className="mx-auto text-center">
      <div className="mx-auto text-center">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="mx-auto text-center"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    <ParticlesBackground />
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
  }
}
`