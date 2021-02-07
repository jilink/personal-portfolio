import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react"
import React from "react"
export default function ThemeToggle() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <Button
      rightIcon={<ToggleIcon />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleMode}
    >
      Thème
    </Button>
  )
}
