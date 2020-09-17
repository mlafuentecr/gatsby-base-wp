module.exports = {
  siteMetadata: {
    title: `Mario lafuente | Front End Web Developer from Costa Rica`,
    description: `Mario lafuente - Front End Web Developer from Costa Rica with over a decade of experience in web development wordpress and react , gatsby, and  web related software. `,
    author: `@mariolafuente`,
    siteUrl: "https://www.mariolafuente.com/",
  },
  plugins: [
    `gatsby-plugin-offline`,
   `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        precachePages: [`/ejemplo-de-websites/`, `/ejemplo-de-material-impreso/*`],
      },
      options: {
        fonts: [
          `limelight`,
          `source Lato pro\:300,400, 900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      //If variable no refresh run gatsby clean
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `WP_1`,
        typeName: `WPheadless`,
        url: "https://www.gatsby.mariolafuente.com/graphql",
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source Lato pro\:300,400, 900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mariolafuente.com`,
        short_name: `mariolafuente`,
        start_url: `/`,
        lang: `en`,
        background_color: `#f1162b`,
        theme_color: `#f1162b`,
        display: `fullscreen`,
        // gcm_sender_id: 'fbe5a671-adba-4b70-b95e-34c8d10c33cf',
        icon: `./static/apple-icon.png`, // This path is relative to the root of the site.
        crossOrigin: `anonymous`,// `use-credentials` or `anonymous`
      },
    },
  ],
  
}
