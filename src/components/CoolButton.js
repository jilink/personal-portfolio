import { Button } from "@chakra-ui/button"
import { LinkOverlay } from "@chakra-ui/react"
import React from "react"

const CoolButton = ({ href, children, ...props }) => {
  return (
    <Button
      minW="50%"
      border="1px solid transparent"
      borderRadius="0"
      size="sm"
      _hover={{ borderColor: "black" }}
      m="2"
      {...props}
    >
      <LinkOverlay href={href}>{children}</LinkOverlay>
    </Button>
  )
}

const CoolButtonSubmit = ({ children, ...props }) => {
  return (
    <Button
      type="submit"
      minW="50%"
      border="1px solid transparent"
      borderRadius="0"
      size="sm"
      _hover={{ borderColor: "black" }}
      m="2"
      {...props}
    >
      {children}
    </Button>
  )
}

export default CoolButton
export { CoolButtonSubmit }
