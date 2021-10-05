/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Box, Flex } from "@chakra-ui/layout"
import { useColorMode } from "@chakra-ui/color-mode"

import CodingGuy from '../images/coding-guy.svg'

const Layout = ({ children }) => {

  const [currentScroll, setCurrentScroll] = useState(0)
  const [showHeader, setShowHeader] = useState(false)

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
    if(scroll >= currentScroll && showHeader) {
      setShowHeader(false)
    }
    if(scroll < currentScroll && !showHeader) {
      setShowHeader(true)
    }

    console.log("scroll", scroll)
    console.log("current", currentScroll)

    setCurrentScroll(scroll)

    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [currentScroll, showHeader, setShowHeader]);

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
          colorMode === "light" ? "radial(bgOrange.100,  bgOrange.500 );" : ""
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
            padding: `0 2.0875rem 1.45rem`,
          }}
        >
          <main>
            <Flex
              zIndex="-1"
              position="fixed"
              w="100%"
              justify="flex-end"
              alignItems="end"
            >
              <CodingGuy />
            </Flex>
            {children}
          </main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
