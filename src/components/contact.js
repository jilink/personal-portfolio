import React from "react"
import {
  Box,
  FormLabel,
  FormControl,
  Input,
  Heading,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react"
import Picture from "../images/contact.svg"

const Contact = () => {
  return (
    <Box id="contact">
      <Heading as="h3" size="lt" textAlign="center">
        Me contacter
      </Heading>
      <Flex>
        <form>
          <FormControl id="name" isRequired>
            <FormLabel>Nom</FormLabel>
            <Input name="name" placeholder="John Doe" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Adresse e-mail</FormLabel>
            <Input name="email" type="email" placeholder="john@example.com" />
          </FormControl>
          <FormControl id="subject">
            <FormLabel>Objet du message</FormLabel>
            <Input
              name="subjeect"
              type="text"
              placeholder="Site web pour mon entreprise"
            />
          </FormControl>
          <FormControl id="content">
            <FormLabel>
              Parlez de votre projet ou posez moi une question
            </FormLabel>
            <Textarea placeholder="J'ai besoin d'aide pour ..." />
          </FormControl>
          <Button type="submit">Envoyer</Button>
        </form>
        <Picture />
      </Flex>
    </Box>
  )
}

export default Contact
