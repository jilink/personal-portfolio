import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import React from "react"
export default function ThemeToggle() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <IconButton
      icon={<ToggleIcon />}
      variant="ghost"
      _hover={{ bg: "primary" }}
      aria-label="Toggle Theme"
      onClick={toggleMode}
    />
  )
}
