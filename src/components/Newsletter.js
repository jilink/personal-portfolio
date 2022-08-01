import React from 'react'
import Section from './sections/Section';
import Axios from "axios"
import { Link, useToast, Text, Flex, FormLabel, FormControl, Box, UnorderedList, ListItem} from '@chakra-ui/react';
import { CoolInput } from './sections/contact';
import {CoolButtonSubmit} from './CoolButton';
import { Link as ReachLink } from "gatsby"

const NewsletterSection = () => {
  return (
    <Section m="5">
      <Flex
        alignSelf="center"
        w={{ base: "100%", md: "50%" }}
        direction="column"
      >
        <Text
          m="3"
          color="white"
          align="center"
          as="h1"
          fontSize="2xl"
          fontWeight="bold"
          mb="3"
        >
          La Newsletter pour les Développeurs Freelance
        </Text>
        <Newsletter />
      </Flex>
      <Box
        p={3}
        bgColor="rgba(0,0,0,0.5)"
        mt="2"
        color="white"
        fontWeight="bold"
        maxW="1000px"
        alignSelf="center"
      >
        <Text align="center">
          Hey ! Je vous remercie de votre intérêt pour la Newsletter
        </Text>
        <Text align="center" mb="1">
          En vous abonnant vous allez recevoir chaque semaine un petit mail
          condensé des choses que j'ai envie de vous partager en ce moment !
        </Text>
        <br />
        <Text mb="1">
          La plupart du temps le mail vous proposera{" "}
          <Box as="span" fontWeight="bold">
            5 découvertes
          </Box>{" "}
          que j'ai faites pendant la semaine. Les découvertes vont se concentrer
          autour des sujets suivants :
        </Text>
        <UnorderedList>
          <ListItem fontWeight="extrabold">
            {" "}
            Des Astuces générales pour les{" "}
            <Box as="span" textDecoration="underline">
              freelance
            </Box>{" "}
            <span role="img" aria-label="emoji">
              😎
            </span>
          </ListItem>
          <ListItem fontWeight="extrabold">
            {" "}
            Des Conseils plus ciblés pour les développeurs (surtout si vous
            utilisez{" "}
            <Box as="span" color="#00d5f7" textDecoration="underline">
              Reactjs
            </Box>{" "}
            <span role="img" aria-label="emoji">
              👀
            </span>
            )
          </ListItem>
          <ListItem fontWeight="extrabold">
            Assez souvent des partages autour de{" "}
            <Box as="span" textDecoration="underline">
              Notion
            </Box>
          </ListItem>
          <ListItem fontWeight="extrabold">
            De temps en temps des petits outils sympa du genre{" "}
            <Box as="span" textDecoration="underline">
              Extensions Chrome
            </Box>
          </ListItem>
          <ListItem fontWeight="extrabold">
            Des Updates sur mes projets perso du moment car il faut bien faire
            sa propre pub aussi de temps en temps et, qui sait, ça pourrait vous
            intéresser
          </ListItem>
        </UnorderedList>
        <Box textAlign="center">
          <Link
            align="center"
            fontSize="2xl"
            target="_blank"
            textDecoration="underline"
            href="https://89hie.r.ag.d.sendibm3.com/mk/mr/j5P9_Qr99RaYTgBQvtyALoV5RyqB4XjIVRsiThL8PfRoahYl8MpSywDHNqzvTlxW6XIskJ8WC16k66S7nLMh-f6RYPEqmNHx8pyyAuV8i2-iyGDqrxReTvDQZbapEr7AtdA6"
          >
            Consulter un exemple de Newsletter
          </Link>
        </Box>
      </Box>
    </Section>
  )
}

const Newsletter = ({ showMore = false, ...props }) => {
  const [email, setEmail] = React.useState("")
  const toast = useToast()
  const toastSuccess = () => {
    toast({
      title: "On est bon !",
      description: "Tu receveras bientôt la prochaine newsletter !",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
  }
  const toastFaillure = () => {
    toast({
      title: "Il y a eu un soucis ...",
      description: "Si le problème continue, n'hésite pas à m'en faire part",
      status: "error",
      duration: 4000,
      isClosable: true,
    })
  }
  const handleSubscribe = async e => {
    e.preventDefault()
    try {
      await Axios.post(
        "https://api.sendinblue.com/v3/contacts",
        {
          email: email,
          listIds: [3],
        },
        {
          headers: {
            "api-key": process.env.GATSBY_SENDINBLUE_API_KEY,
            "Content-Type": "application/json",
          },
        }
      )
      setEmail("")
      toastSuccess()
    } catch (error) {
      toastFaillure()
    }
  }
  return (
    <Flex p="3" bg="white" color="black" direction="column" {...props}>
      <form style={{ marginBottom: "0" }} onSubmit={handleSubscribe}>
        <Text textAlign="center" fontWeight="extrabold">
          Je partage chaque semaine des conseils, astuces et découvertes
        </Text>
        <Text mb="1" textAlign="center" fontWeight="extrabold">
          pour les développeurs freelance
        </Text>
        <FormControl id="name" mr="3" isRequired>
          <FormLabel>Entrez votre adresse mail</FormLabel>
          <CoolInput
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
            placeholder="example@mail.fr"
            style={{ border: "1px solid #E76F51" }}
          />
        </FormControl>
        <CoolButtonSubmit
          mx="0"
          w="100%"
          bg="secondary"
          color="white"
          mb="0"
          border="solid"
        >
          Recevoir la Newsletter
        </CoolButtonSubmit>
      </form>
      {showMore && (
        <Link
          as={ReachLink}
          to={`/newsletter`}
          style={{ boxShadow: "none" }}
          alignSelf="center"
        >
          <Text fontSize="sm">En savoir plus</Text>
        </Link>
      )}
    </Flex>
  )
}
export default NewsletterSection
export { Newsletter }