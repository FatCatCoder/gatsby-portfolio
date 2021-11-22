import { useStaticQuery, graphql } from "gatsby"

/*

readme: object(expression: "main:README.md") {
            ... on Blob {
              text
            }
          }

*/

function BuildData(){
    const {allGithubData: {edges: {[0]: {node: {rawResult: {data: {user: {pinnedItems: {nodes}}}}}}}}} = useStaticQuery(graphql`query MyQuery {
        allGithubData {
        edges {
            node {
            rawResult {
                data {
                user {
                    pinnedItems {
                    nodes {
                        createdAt
                        description
                        homepageUrl
                        name
                        pushedAt
                        stargazerCount
                        updatedAt
                        url
                        languages {
                        nodes {
                            name
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        }
        }
    }
    `)
    return nodes
}

export default BuildData;