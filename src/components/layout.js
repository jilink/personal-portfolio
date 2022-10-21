/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Box, Flex } from "@chakra-ui/layout"
import { useColorMode } from "@chakra-ui/color-mode"
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./svg.css"

import CodingGuy from "../images/coding-guy.svg"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const numberOfSections = 4

  const [currentScroll, setCurrentScroll] = useState(0)
  const [showHeader, setShowHeader] = useState(true)
  const [codingGuyClass, setCodingGuyClass] = useState("coding-guy")

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      if (scroll >= currentScroll && showHeader) {
        setShowHeader(false)
      }
      if (scroll < currentScroll && !showHeader) {
        setShowHeader(true)
      }

      const middleScroll = currentScroll + window.innerHeight / 2 // what position of the document is the middle of current screen display
      const sectionHeight = document.body.scrollHeight / numberOfSections
      setCodingGuyClass(
        `coding-guy-${Math.floor(middleScroll / sectionHeight)}`
      ) // we can get if we are in the first, the second etc section like that easily

      setCurrentScroll(scroll)
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [currentScroll, showHeader, setShowHeader])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          catchPhrase
        }
      }
    }
  `)
  const { colorMode } = useColorMode()

  return (
    <>
      <Box
        bgGradient={
          colorMode !== "dark" ? "radial(bgOrange.100,  bgOrange.500 );" : ""
        }
        position="absolute"
        w="100%"
        zIndex="-2"
      >
        <Header
          showHeader={showHeader}
          style={{
            width: "100%",
            zIndex: "2",
            position: "fixed",
          }}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <Box
          style={{
            margin: `0 auto`,
            padding: `inherit 2.0875rem 1.45rem`,
          }}
          pt={{ base: "15vh", md: "20vh", lg: "10vh" }}
          overflowY="hidden"
        >
          <main>
            <Flex
              zIndex="-1"
              position="fixed"
              w="100%"
              justify="flex-end"
              alignItems="end"
            >
              <CodingGuy className={codingGuyClass} />
            </Flex>
            {children}
            <Footer />
          </main>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
