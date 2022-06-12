import { Box, Center, Flex, Heading } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"
import Section from "./Section"
import MotionBox from "../MotionBox"

const Competences = () => {
  const data = useStaticQuery(graphql`
    query {
      Front: allFile(filter: { absolutePath: { regex: "/frontend/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      Back: allFile(filter: { absolutePath: { regex: "/backend/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      Others: allFile(filter: { absolutePath: { regex: "/others/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section id="competences" title="Compétences" justify="space-between">
      <SkillCategory title="Front-End" skills={data?.Front.edges} />
      <SkillCategory title="Back-End" skills={data?.Back.edges} />
      <SkillCategory title="Autres outils" skills={data?.Others.edges} />
    </Section>
  )
}

const SkillCategory = ({ title, skills = [], ...props }) => {
  return (
    <Box>
      <Heading bg="inherit" m="0" as="h3" size="lg" textAlign="center">
        {title}
      </Heading>
      <Flex p="5" wrap="wrap" justify="center" textAlign="-webkit-center">
        {skills.map((skill, index) => (
          <Skill index={index} key={skill.node.id} skill={skill.node} />
        ))}
      </Flex>
    </Box>
  )
}

const Skill = ({ skill, index }) => {
  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min
  const delay = getRandom(0, 5)
  const duration = getRandom(1, 6)
  const [displayText, setDisplayText] = useState(false)
  return (
    <MotionBox
      style={{ width: "20%", height: "20%" }}
      animate={{ x: getRandom(-30, 30), y: getRandom(-50, 50) }}
      transition={{
        repeat: "Infinity",
        repeatDelay: delay,
        duration: duration,
        repeatType: "reverse",
      }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
    >
      <Flex
        alignItems="center"
        direction="column"
        width={{ base: "40%", md: "24%" }}
        onMouseEnter={() => setDisplayText(true)}
        onMouseLeave={() => setDisplayText(false)}
        bg="white"
        borderRadius="lg"
        p="1"
      >
        {displayText && (
          <Center
            position="absolute"
            color="black"
            zIndex={2}
            bg="white"
            textTransform="capitalize"
            fontSize={{ base: "xs", md: "md" }}
          >
            {skill.name}
          </Center>
        )}
        <Img
          style={{ width: "100%", height: "100%" }}
          loading="lazy"
          fluid={skill.childImageSharp.fluid}
          alt={skill.name}
        />
      </Flex>
    </MotionBox>
  )
}

export default Competences
