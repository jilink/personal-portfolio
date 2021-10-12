import { ChakraProvider } from "@chakra-ui/react"
import theme from "./@chakra-ui/gatsby-plugin/theme"
import React from "react"
import Layout from "./components/layout"
export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
