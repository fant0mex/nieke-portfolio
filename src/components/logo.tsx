import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Logo = () => {
  const data = useStaticQuery(query);
  console.log({ data });

  return (
    <Img fluid={data.logo.childImageSharp.fluid} />
  )

}
export default Logo

const query = graphql`
  query Logo {
    logo: file(sourceInstanceName: { eq: "images" }, name: { eq: "logo" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
