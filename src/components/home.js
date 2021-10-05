import { Flex, Text } from '@chakra-ui/layout'
import CodingGuy from '../images/coding-guy.svg'
import Logo from "./images/logo"

import React from 'react'
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
    <Flex>
      <Flex  direction="column">
        <Logo/>
        <Text>{catchPhrase}</Text>
        <Flex>
        </Flex>
      </Flex>
      <CodingGuy/>
    </Flex>
  )
}

export default Home
