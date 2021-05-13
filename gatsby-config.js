module.exports = {
    siteMetadata: {
        title: `Stephen Hwang Portfolio`,
        titleTemplate: `%s `,
        description: `Stephen Hwang's personal website to showcase himself and his work`,
        author: `Stephen Hwang`
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            }
        },
    ]
}