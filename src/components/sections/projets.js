import Img from "gatsby-image"
import { Box, Center, Flex, LinkOverlay, Text } from '@chakra-ui/layout'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState }  from 'react'
import Section from './Section'
import { Slide } from "@chakra-ui/react"

const Projets = () => {
  const data = useStaticQuery(graphql`
    query {
      garticClone: file(relativePath: { eq: "gartic-clone-cat.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      sushiClicker: file(relativePath: { eq: "sushi-clicker.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      kohLanta: file(relativePath: { eq: "koh-lanta-simulator.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log("data", data)
  const projects = [
    {
      title: "Gartic Clone",
      url: "https://gartic-clone.netlify.app/",
      image: data?.garticClone,
      description:
        "Clone du jeu Gartic Phone (multijoueur en ligne) fait avec Reactjs, Nodejs et Socket.IO",
    },
    {
      title: "Sushi Clicker",
      url: "https://sushi-clicker.netlify.app/",
      image: data?.sushiClicker,
      description:
        "Un 'Cookie Clicker like' avec Reactjs et Webpack",
    },
    {
      title: "Koh Lanta Simulator",
      url: "http://koh-lanta-simulator.ga/#/",
      image: data?.kohLanta,
      description:
        "Un de mes premiers projets qui a mal vielli mais que j'aime quand même !",
    },
  ]
  return (
    <Section id="projets" title="Projets">
      <Flex align="center" justify="space-between" wrap="wrap" alignSelf="center">
        {projects.map((project, index) => (
          <Projet key={index} project={project} />
        ))}
      </Flex>
    </Section>
  )
}

const Projet = ({ project }) => {
const [showDescription, setShowDescription] = useState(0)

  return (
    <Box
      onMouseEnter={() => setShowDescription(1)}
      onMouseLeave={() => setShowDescription(0)}
      w="20em"
      h="17em"
      overflow="hidden"
      position="relative"
      m="4"
    >
      <Center fontSize="2xl" color="white" bg="greenblue">
        {project.title}
      </Center>
      <Box w="inherit" h="inherit">
        <LinkOverlay target="_blank" w="inherit" h="inherit" href={project.url}>
          <Img
            style={{ width: "inherit", height: "inherit" }}
            loading="lazy"
            fixed={project.image.childImageSharp.fixed}
            alt={project.description}
          />
          <Text
            opacity={showDescription}
            bg="primary"
            align="center"
            bottom="0%"
            position="absolute"
            color="white"
            transition="opacity 0.5s ease;"
          >
            {project.description}
          </Text>
        </LinkOverlay>
      </Box>
    </Box>
  )
}

export default Projets
