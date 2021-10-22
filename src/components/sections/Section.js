import { Flex, Heading } from "@chakra-ui/layout"
import React from "react"

const Section = ({ children, title, ...props }) => {
  return (
    <Flex direction="column" minH="100vh" {...props} p="4">
      <Heading
        mb={title ? 8 : 0}
        as="h2"
        size="2xl"
        textAlign="center"
        color="white"
      >
        {title}
      </Heading>
      {children}
    </Flex>
  )
}

export default Section
