import { Center, Flex, Spacer } from "@chakra-ui/layout"
import Logo from "../images/logo"

import React from "react"
import { useStaticQuery } from "gatsby"
import Section from "./Section"
import { useBreakpointValue } from "@chakra-ui/media-query"
import CoolButton from "../CoolButton"
import Testimonials from '../Testimonials';

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
    <Section id="home" color="white" align={{ base: "center", md: "unset" }}>
      <Flex justify="space-evenly" direction={{base: "column", md: "row"}}>
        <Flex direction="column" align="center">
          <Logo big={big} md={!big} />
          <Center textAlign="center" fontSize="smaller">
            {catchPhrase}
          </Center>
          <Flex justify="center">
            <CoolButton href="#contact" bg="greenblue">
              Contacter
            </CoolButton>
            {/* <CoolButton href='#services' bg="primary">Services</CoolButton> */}
            <CoolButton href="#competences" bg="primary">
              Compétences
            </CoolButton>
          </Flex>
          <Spacer />
        </Flex>
        <Flex mt="5" justify="center" align="center" w={{base: "100%", md: "70%", lg: "65%", xl:"40%"}}>
          <Testimonials/>
        </Flex>
      </Flex>
    </Section>
  )
}

export default Home
