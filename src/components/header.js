import PropTypes from "prop-types"
import React from "react"
import { Link as ReachLink } from "gatsby"

import {
  Flex,
  Stack,
  Box,
  Text,
  Link,
  Center,
  LinkBox,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

import ThemeToggle from "./toggle-theme"
import Logo from "./images/logo"

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

const LinkItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link as={ReachLink} to={to} style={{ boxShadow: "none" }} _hover={{ textDecoration: "none", color:"secondary"}}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
    fontWeight="semibold"
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <LinkItem to="#contact">Contacter</LinkItem>
      <LinkItem to="/">Services/Tarifs</LinkItem>
      <LinkItem to="/">Compétences</LinkItem>
      <LinkItem to="/">Projets</LinkItem>
      <ThemeToggle />
    </Stack>
  </Box>
)
const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={4}
      py={1}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const bg = "primary"
  return (
    <header>
      <NavBarContainer bg={bg} color="white">
        <Flex>
        <LinkBox as={ReachLink} to="/">
          <Logo/>
        </LinkBox>
        <Center style={{borderLeft:"1px solid"}} m={5} pl={2}>Développeur Freelance</Center>
          </Flex>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
