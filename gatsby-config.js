module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `LAD`,
    description: `Laboratorio di Archeologia Digitale alla Sapienza`,
    author: `Julian Bogdani`,
    siteUrl: `https://lad.saras.uniroma1.it/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        openGraph: {
          type: 'website',
          locale: 'it_IT',
          url: 'https://lad.saras.uniroma1.it/',
          site_name: 'LAD: Laboratorio di Archeologia Digitale alla Sapienza',
        },
        twitter: {
          handle: '@JulianBogdani',
          site: '@JulianBogdani',
          cardType: 'summary_large_image',
        },
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        gfm: true,
        footnotes: true,
        plugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-highlight-code"
        ]
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "favicon",
        path: `${__dirname}/static/favicon`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cormorant Garamond`,
          `d:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      
    },
  ],
};
