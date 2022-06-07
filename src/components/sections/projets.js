import Img from "gatsby-image"
import { Box, Flex, Link, LinkOverlay, Text } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Section from "./Section"

const Projets = () => {
  const data = useStaticQuery(graphql`
    query {
      KnowIt: file(relativePath: { eq: "know-it-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Comeback: file(relativePath: { eq: "comeback-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Coiffeur: file(relativePath: { eq: "coiffeur-vitrine-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Portfolio: file(relativePath: { eq: "portfolio-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      garticClone: file(relativePath: { eq: "gartic-clone-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      sushiClicker: file(relativePath: { eq: "sushi-clicker-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      kohLanta: file(relativePath: { eq: "koh-lanta-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      Github: file(relativePath: { eq: "github-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const projects = [
    {
      title: "Know It!",
      image: data?.KnowIt,
      url:"https://www.know-it.bluepopcorn.fun",
      description: "Progressive Web App avec Nextjs, Graphql, Neo4j pour s'entrainer en anglais avec des mini jeux.",
    },
    {
      title: "Portfolio",
      url: "/",
      image: data?.Portfolio,
      description:
        "Vous êtes déjà dedans ;) Il a été développé avec Gatsby et Chakra UI",
    },
    {
      title: "Coiffeur Vitrine",
      url: "https://coiffeur-vitrine.netlify.app",
      image: data?.Coiffeur,
      description:
        "Un exemple de site assez sobre pour coiffeur, développé avec Gatsby",
    },
    {
      title: "Gartic Clone",
      url: "https://gartic-clone.netlify.app/",
      image: data?.garticClone,
      description:
        "Clone du jeu Gartic Phone (multijoueur en ligne) développé avec Reactjs, Nodejs et Socket.IO",
    },
    {
      title: "Sushi Clicker",
      url: "https://sushi-clicker.netlify.app/",
      image: data?.sushiClicker,
      description: "Un 'Cookie Clicker like' développé avec Reactjs et Webpack",
    },
    {
      title: "Comeback",
      url: "https://come-back.netlify.app/",
      image: data?.Comeback,
      description:
        "Développement de l'API pour cette application web qui permet de se tenir au courrant des dernières sorties de ses artistes préférés, avec Express, Sequelize, Nodejs et PostgreSQL",
        collab: {text: "Front par Zokiasu", url: "https://zokiasu.netlify.app"}
    },
    {
      title: "Koh Lanta Simulator",
      url: "https://koh-lanta-simulator.netlify.app/",
      image: data?.kohLanta,
      description:
        "Un de mes premiers projets Reactjs qui a mal vielli mais que j'aime quand même !",
    },
    {
      title: "Github",
      url: "https://github.com/jilink",
      image: data?.Github,
      description:
        "D'autres projets qui n'ont pas eu l'occasion d'être publié sont disponibles sur mon github !",
    },
  ]
  return (
    <Section id="projets" title="Projets">
      <Flex justify="center" align="center" wrap="wrap" alignSelf="center">
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
      onMouseEnter={() => setShowDescription(0.9)}
      onMouseLeave={() => setShowDescription(0)}
      w={{base:"8em", md: "20em"}}
      h={{base:"7.5em", md: "17em"}}
      overflow="hidden"
      position="relative"
      m="4"
      shadow="2xl"
    >
      <Box w="inherit" h="inherit">
        <LinkOverlay target="_blank" w="inherit" h="inherit" href={project.url}>
          <Img
            style={{ width: "inherit", height: "inherit" }}
            loading="lazy"
            fixed={project.image.childImageSharp.fixed}
            alt={project.title}
          />
          <Text
            opacity={showDescription}
            bg="black"
            p="2"
            h="100%"
            align="center"
            bottom="0%"
            position="absolute"
            color="white"
            transition="opacity 0.7s ease;"
          >
            {project.description}
          </Text>
        </LinkOverlay>
      </Box>
      {project.collab && (
        <Link
          fontSize="small"
          position="absolute"
          bottom="0%"
          color="white"
          p="2"
          target="_blank"
          href={project.collab.url}
        >
          {project.collab.text}
        </Link>
      )}
    </Box>
  )
}

export default Projets
