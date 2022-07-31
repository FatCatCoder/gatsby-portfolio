import * as React from "react"
import { graphql, Link,} from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

// components
import Layout from '../../components/Layout';

// utils
// import isMobile from "../utils/isMobile";

// styles
import ParticlesBackground from '../../components/ParticlesBackground'
import "../../styles/global.scss"

const BlogPage = ({data}) => {

  console.log(data);

  return(
    <>
      <div data-scroll-container className="main-container container-fluid bg-transparent position-relative" id="main-container">
        <div className="text-center bg-transparent">
          <h1>Blog Page</h1>

          <div class="card-group bg-transparent border-none text-decoration-none">
            {data.allMarkdownRemark.nodes.map((x) => (
              <Link class="card text-primary bg-transparent text-white border-0 text-decoration-none"  to={`${x.fields.slug}`}>
                <img src={x.frontmatter.img} class="card-img-top mx-auto" style={{maxWidth: '450px', maxHeight: '450px'}} />
                <div class="card-body">
                  <h5 class="card-title">{x.frontmatter.title}</h5>
                  <p class="card-text">{x.frontmatter.description}.</p>
                  <p class="card-text"><small class="text-muted">{x.frontmatter.date}</small></p>
                </div>
              </Link>
            ))}
          </div>
          
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
          date(formatString: "MMMM DD, YYYY")
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

