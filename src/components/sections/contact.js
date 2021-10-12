import React, { useRef } from "react"
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
  Spacer,
  useToast,
} from "@chakra-ui/react"
import Section from "./Section"
import { CoolButtonSubmit } from "../CoolButton"
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef()

  const toast = useToast()
  const toastSuccess = () => {
    toast({
      title: "Bien envoyé !",
      description: "Je répondrais à votre message d'ici peu",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
  }
  const toastFaillure = () => {
    toast({
      title: "Il y a eu un soucis ...",
      description:
        "Si le problème continue, envoyez moi un message sur les réseaux ci-dessous",
      status: "error",
      duration: 4000,
      isClosable: true,
    })
  }

  const sendEmail = e => {
    e.preventDefault()
    console.log("ici env", process.env)
    console.log("ici envuser", process.env.MAILJS_USERID)
    console.log("ici envuser gatsby", process.env.GATSBY_MAILJS_USERID)
    emailjs
      .sendForm(
        process.env.MAILJS_SERVICEID,
        process.env.MAILJS_TEMPLATEID,
        form.current,
        process.env.MAILJS_USERID
      )
      .then(
        result => {
          toastSuccess()
        },
        error => {
          toastFaillure()
        }
      )
  }

  return (
    <Section id="contact" title="Me contacter" justify="space-between">
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        my="3"
        bg="greenblue"
        color="white"
      >
        <AlertIcon boxSize="40px" mr={0} color="primary" />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Besoin d'aide pour construire un site vitrine, une application web ou
          une API ?
        </AlertTitle>
        <AlertDescription maxWidth="lg" fontSize={{ base: "small", md: "md" }}>
          J'aide les entreprises et les particuliers à construire leur projets
          web notamment avec Reactjs, vous pouvez me contacter en remplissant le
          formulaire ci-dessous ou en m'envoyant un message sur{" "}
          <Link
            fontWeight="bold"
            href="https://www.linkedin.com/in/jimmy-soussan/"
          >
            LinkedIn
          </Link>
        </AlertDescription>
      </Alert>
      <Spacer />
      <Flex direction="column" w={{ base: "100%", md: "50%" }}>
        <form ref={form} onSubmit={sendEmail}>
          <Flex justify="space-between" mb="3">
            <FormControl id="name" mr="3" isRequired>
              <FormLabel>Nom</FormLabel>
              <CoolInput name="from_name" placeholder="John Doe" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Adresse e-mail</FormLabel>
              <CoolInput
                name="reply_to"
                type="email"
                placeholder="john@example.com"
              />
            </FormControl>
          </Flex>
          <FormControl id="subject" mb="3">
            <FormLabel>Objet du message</FormLabel>
            <CoolInput
              name="subject"
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
              name="message"
            />
          </FormControl>
          <CoolButtonSubmit
            fontSize="lg"
            w="100%"
            mx="0"
            bg="primary"
            color="white"
          >
            Envoyer
          </CoolButtonSubmit>
        </form>
      </Flex>
      <Spacer />
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
