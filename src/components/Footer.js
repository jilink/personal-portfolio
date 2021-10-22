import { Box, Center, Flex, LinkBox, LinkOverlay } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      Linkedin: file(relativePath: { eq: "socials/linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Github: file(relativePath: { eq: "socials/github.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Twitter: file(relativePath: { eq: "socials/twitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Gmail: file(relativePath: { eq: "socials/gmail.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const socials = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/jimmy-soussan/",
      image: data?.Linkedin,
    },
    {
      title: "Github",
      url: "https://github.com/jilink",
      image: data?.Github,
    },
    {
      title: "Gmail",
      url:
        "https://mail.google.com/mail/u/0/?fs=1&to=jimmy.soussan@gmail.com&su=Mon+projet+web&tf=cm",
      image: data?.Gmail,
    },
    // {
    //   title: "Twitter",
    //   url: "https://twitter.com/CozyCodeur",
    //   image: data?.Twitter,
    // },
  ]
  return (
    <Box py="3" w="100%" bg="black" color="white" minH="5vh">
      <Flex p="3" justify="space-around">
        {socials.map(social => (
          <Social key={social.title} social={social} />
        ))}{" "}
      </Flex>
      <Center>© {new Date().getFullYear()} - Cozy Codeur</Center>
    </Box>
  )
}

const Social = ({ social }) => {
  return (
    <LinkBox
      alignItems="center"
      direction="column"
      width={{ base: "3vh", md: "3vh" }}
    >
      <LinkOverlay target="_blank" w="inherit" h="inherit" href={social.url}>
        <Img
          loading="lazy"
          fluid={social.image.childImageSharp.fluid}
          alt={social.name}
        />
      </LinkOverlay>
    </LinkBox>
  )
}

export default Footer
