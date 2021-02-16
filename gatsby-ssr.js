import React from "react"
import { ColorModeScript } from "@chakra-ui/react"
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript initialColorMode="dark" key="chakra-ui-no-flash" />,
  ])
}
