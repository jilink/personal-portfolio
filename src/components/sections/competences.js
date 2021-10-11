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
    }
  `)

  console.log("data", data.Front.edges)
  return (
    <Section id="competences" title="Compétences">
      <SkillCategory title="Front-End" skills={data?.Front.edges}/>
      <SkillCategory title="Back-End" skills={data?.Back.edges}/>
      <SkillCategory title="Autres outils"/>
    </Section>
  )
}

const SkillCategory = ({title, skills=[]}) => {
  return (
    <Box>
      <Heading
        m={title ? 6 : 0}
        as="h3"
        size="lg"
        textAlign="center"
        color="white"
      >
        {title}
      </Heading>
      <Divider />
      <Flex>
      {skills.map(skill => (
        <Skill key={skill.node.id} skill={skill.node} />
      ))}
      </Flex>
    </Box>
  )
}

const Skill = ({skill}) => {

  return (
    <Flex alignItems="center" direction="column" width={{base: "50%", md:"30%"}}>
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
