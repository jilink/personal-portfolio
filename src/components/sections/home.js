import { Center, Flex, Spacer } from '@chakra-ui/layout'
import Logo from "../images/logo"

import React  from 'react'
import { useStaticQuery } from 'gatsby'
import Section from './Section'
import { useBreakpointValue } from '@chakra-ui/media-query'
import CoolButton from '../CoolButton'

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
  const big = useBreakpointValue({ base: false, md: true })
  return (
    <Section id="home" color="white">
      <Flex>
        <Flex direction="column" flex="1" align="center">
          <Logo big={big} />
          <Center fontSize="smaller">{catchPhrase}</Center>
          <Flex justify="center">
            <CoolButton href='#contact' bg="greenblue">Contacter</CoolButton>
            <CoolButton href='#services' bg="primary">Services</CoolButton>
          </Flex>
        </Flex>
        <Spacer />
      </Flex>
    </Section>
  )
}

export default Home
