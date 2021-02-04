/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Sudara Ranasinghe`,
    author: `Sudara Ranasinghe`,
    firstName: `Sudara`,
    lastName: `Ranasinghe`,
    description: `Sudara's personal site`,
    occupation: `Software Engineer`,
    keywords: [`Sudara`, `Ranasinghe`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `CS Student`,
      `Passionate Programmer`,
      `Aspiring Software Engineer`,
    ],
    readingList: [
      {
        title: `Lord of the Rings`,
        author: `J. R. R. Tolkien`,
        link: `https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings`,
      },
    ],
    showsList: [
      {
        title: `Brooklyn Nine-Nine`,
        author: `Michael Schur, Dan Goor`,
        link: `https://www.imdb.com/title/tt2467372/`,
      },
      {
        title: `Silicon Valley`,
        author: `Mike Judge, et al.`,
        link: `https://www.imdb.com/title/tt2575988/`,
      },
      {
        title: `BoJack Horseman`,
        author: `Raphael Bob-Waksberg`,
        link: `https://www.imdb.com/title/tt3398228/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe's Personal Site`,
        short_name: `J.Doe`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
