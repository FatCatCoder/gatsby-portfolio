require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: `https://api.github.com/graphql`,
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: `query { 
          user(login: "FatCatCoder"){
            pinnedItems(first: 6){
              nodes{
                ... on Repository{
                  name
                  url
                  homepageUrl
                  createdAt
                  updatedAt
                  pushedAt
                  stargazerCount
                  description
                  languages(first: 3){
                    nodes{
                      ... on Language{
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
        variables: {}
      },
    },
  ],
};
