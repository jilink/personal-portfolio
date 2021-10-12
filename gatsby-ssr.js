import React from "react"
import { ColorModeScript } from "@chakra-ui/react"

import { wrapPageElement as wrap } from "./src/woot-wrapper"
export const wrapPageElement = wrap

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript initialColorMode="light" key="chakra-ui-no-flash" />,
  ])
}
