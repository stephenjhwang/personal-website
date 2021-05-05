import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Gallery from '@browniebroke/gatsby-image-gallery'

export default function GalleryComponent() {
  const data = useStaticQuery(graphql`
    query ImagesForGallery {
      allFile(
        filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "gallery"}}
      ) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 400
                height: 400
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout:FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return <Gallery images={images} />
}