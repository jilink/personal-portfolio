import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({...props}) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mylogo.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (data?.logo?.childImageSharp?.fixed) {
    return <Img loading="eager" fadeIn={true} fixed={data.logo.childImageSharp.fixed} {...props}/>
  }
  return <div>Picture not found</div>
}

export default Logo
