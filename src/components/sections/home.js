import { Flex, Text } from '@chakra-ui/layout'
import Logo from "../images/logo"

import React  from 'react'
import { useStaticQuery } from 'gatsby'

const Home = () => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            catchPhrase
          }
        }
      }
    `
  )

  const catchPhrase = site.siteMetadata.catchPhrase
  return (
    <Flex id="#home" justify="space-between" h="100vh">
      <Flex direction="column">
        <Logo />
        <Text>{catchPhrase}</Text>
        <Flex></Flex>
      </Flex>
    </Flex>
  )
}

export default Home
