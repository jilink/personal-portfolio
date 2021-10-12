import React from "react"
import {
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Flex,
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  Link,
} from "@chakra-ui/react"
import Section from "./Section"
import { CoolButtonSubmit } from "../CoolButton"

const Contact = () => {
  return (
    <Section id="contact" title="Me contacter">
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        my="3"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Besoin d'aide pour construire un site vitrine, une application web ou
          encore constuire une api ?
        </AlertTitle>
        <AlertDescription maxWidth="lg" fontSize={{ base: "small", md: "md" }}>
          J'aide les entreprises et les particuliers à construire leur projets
          web avec Reactjs, vous pouvez me contacter en remplissant le
          formulaire ci-dessous ou en m'envoyant un message sur{" "}
          <Link
            fontWeight="bold"
            href="https://www.linkedin.com/in/jimmy-soussan/"
          >
            LinkedIn
          </Link>
        </AlertDescription>
      </Alert>
      <Flex direction="column" w={{ base: "100%", md: "50%" }}>
        <form>
          <Flex justify="space-between" mb="3">
            <FormControl id="name" mr="3" isRequired>
              <FormLabel>Nom</FormLabel>
              <CoolInput name="name" placeholder="John Doe" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Adresse e-mail</FormLabel>
              <CoolInput
                name="email"
                type="email"
                placeholder="john@example.com"
              />
            </FormControl>
          </Flex>
          <FormControl id="subject" mb="3">
            <FormLabel>Objet du message</FormLabel>
            <CoolInput
              name="subjeect"
              type="text"
              placeholder="Site web pour mon entreprise"
            />
          </FormControl>
          <FormControl id="content" mb="3">
            <FormLabel>
              Parlez de votre projet ou posez moi une question
            </FormLabel>
            <Textarea
              _placeholder={{ color: "gray" }}
              color="black"
              borderRadius="0"
              bg="white"
              placeholder="J'ai besoin d'aide pour ..."
            />
          </FormControl>
          <CoolButtonSubmit
            fontSize="lg"
            w="100%"
            mx="0"
            bg="greenblue"
            color="white"
          >
            Envoyer
          </CoolButtonSubmit>
        </form>
      </Flex>
    </Section>
  )
}

export const CoolInput = ({ ...props }) => {
  return (
    <Input
      _placeholder={{ color: "gray" }}
      color="black"
      borderRadius="0"
      bg="white"
      {...props}
    />
  )
}

export default Contact
