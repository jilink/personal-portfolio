import { Box, Center, Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import React from 'react'
import Section from './Section'

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

  console.log("data", data.Front.edges)
  return (
    <Section id="competences" title="Compétences" justify="space-between">
      <SkillCategory title="Front-End" skills={data?.Front.edges}/>
      <SkillCategory title="Back-End" skills={data?.Back.edges} bg="black" color="white"/>
      <SkillCategory title="Autres outils" skills={data?.Others.edges} bg="primary" color="white"/>
    </Section>
  )
}

const SkillCategory = ({title, skills=[], ...props}) => {
  return (
    <Box m="3" bg="white" shadow="2xl" {...props}>
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

const Skill = ({skill}) => {

  return (
    <Flex alignItems="center" direction="column" width={{base: "25%", md:"20%"}}>
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
