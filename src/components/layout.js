/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Box, Flex} from "@chakra-ui/layout"
import { useColorMode } from "@chakra-ui/color-mode"

import CodingGuy from '../images/coding-guy.svg'

const Layout = ({ children }) => {
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
        position="relative"
        zIndex="-2"
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Box
          style={{
            margin: `0 auto`,
            padding: `0 2.0875rem 1.45rem`,
          }}
        >
          <main>
            <Flex zIndex="-1" position="fixed" w="100%" justify="flex-end" alignItems="end">
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
