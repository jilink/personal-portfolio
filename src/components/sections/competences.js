import { Box, Center, Divider, Flex, Heading } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Section from "./Section"

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
    <Section id="competences" title="Compétences" justify="space-between" bg="greenblue">
      <SkillCategory
        title="Front-End"
        skills={data?.Front.edges}
      />
      <SkillCategory
        title="Back-End"
        skills={data?.Back.edges}
      />
      <SkillCategory
        title="Autres outils"
        skills={data?.Others.edges}
      />
    </Section>
  )
}

const SkillCategory = ({ title, skills = [], ...props }) => {
  return (
    <Box color="black" bg="white" m="3" shadow="dark-lg" {...props}>
      <Heading bg="inherit" m="0" as="h3" size="lg" textAlign="center">
        {title}
      </Heading>
      <Divider />
      <Flex p="4" wrap="wrap" justify="center">
        {skills.map(skill => (
          <Skill key={skill.node.id} skill={skill.node} />
        ))}
      </Flex>
    </Box>
  )
}

const Skill = ({ skill }) => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      width={{ base: "25%", md: "20%" }}
    >
      <Center textTransform="capitalize">{skill.name}</Center>
      <Img
        style={{ width: "inherit", height: "inherit" }}
        loading="lazy"
        fluid={skill.childImageSharp.fluid}
        alt={skill.name}
      />
    </Flex>
  )
}

export default Competences
