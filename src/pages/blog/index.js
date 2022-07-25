import * as React from "react"
import { graphql, Link } from "gatsby"

// components
import Layout from '../../components/Layout';

// utils
// import isMobile from "../utils/isMobile";

// styles
import ParticlesBackground from '../../components/ParticlesBackground'
import "../../styles/global.scss"

const BlogPage = ({data}) => {

  return(
    <>
      <div data-scroll-container className="main-container container-fluid bg-transparent position-relative" id="main-container">
        <div className="text-center bg-transparent">
          <h1>Blog Page</h1>

          <div class="card-group bg-transparent">
            {data.allMarkdownRemark.nodes.map((x) => (
              <Link class="card text-primary bg-transparent"  to={`${x.fields.slug}`}>
                <img src={x.frontmatter.img} class="card-img-top mx-auto" style={{width: '150px', height: '150px'}}/>
                <div class="card-body">
                  <h5 class="card-title">{x.frontmatter.title}</h5>
                  <p class="card-text">{x.frontmatter.description}.</p>
                  <p class="card-text"><small class="text-muted">{x.frontmatter.date}</small></p>
                </div>
              </Link>
            ))}
          </div>
          <p>{data.allMarkdownRemark.nodes[0].frontmatter.title}</p>
        </div>
      </div>
      <ParticlesBackground />
    </>
  )
}

export default BlogPage;

export const query = graphql`
   query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          description
          title
          img
        }
        id
        fileAbsolutePath
        html
        fields{
					slug
        }
      }
    }
  }
  `

