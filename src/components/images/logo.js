import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ big = false, md = false, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mylogo.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoMd: file(relativePath: { eq: "mylogo.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoBig: file(relativePath: { eq: "mylogo.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (big && data?.logoBig?.childImageSharp?.fixed) {
    return (
      <Img
        loading="eager"
        fadeIn={true}
        fixed={data.logoBig.childImageSharp.fixed}
        {...props}
      />
    )
  }
  if (md && data?.logoBig?.childImageSharp?.fixed) {
    return (
      <Img
        loading="eager"
        fadeIn={true}
        fixed={data.logoMd.childImageSharp.fixed}
        {...props}
      />
    )
  }
  if (data?.logo?.childImageSharp?.fixed) {
    return (
      <Img
        loading="eager"
        fadeIn={true}
        fixed={data.logo.childImageSharp.fixed}
        {...props}
      />
    )
  }
  return <div>Picture not found</div>
}

export default Logo
