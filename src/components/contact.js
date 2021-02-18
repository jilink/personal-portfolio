import React from "react"
import {
  Box,
  FormLabel,
  FormControl,
  Input,
  Heading,
  Textarea,
} from "@chakra-ui/react"

const Contact = () => {
  return (
    <Box id="contact">
      <Heading as="h3" size="lt">
        Me contacter
      </Heading>
      <form>
        <FormControl id="name" isRequired>
          <FormLabel>Nom</FormLabel>
          <Input name="name" placeholder="John Doe" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Adresse e-mail</FormLabel>
          <Input name="email" type="email" placeholder="john@example.com" />
        </FormControl>
        <FormControl id="content">
          <FormLabel>Parlez de votre projet</FormLabel>
          <Textarea placeholder="J'ai besoin d'aide pour ..." />
        </FormControl>
      </form>
    </Box>
  )
}

export default Contact
