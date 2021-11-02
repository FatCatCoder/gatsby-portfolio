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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `GitHub`,
    //     fieldName: `github`,
    //     url: `https://api.github.com/graphql`,
    //     headers: {
    //       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //     },
    //     fetchOptions: {}
    //   },
    // },
  ],
};
