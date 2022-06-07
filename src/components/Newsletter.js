import React from 'react'
import Section from './sections/Section';
import Axios from "axios"
import { Link, useToast, Text, Flex, FormLabel, FormControl} from '@chakra-ui/react';
import { CoolInput } from './sections/contact';
import {CoolButtonSubmit} from './CoolButton';
import { Link as ReachLink } from "gatsby"

const NewsletterSection = () => {
  return (
    <Section>
      <Flex alignSelf="center" w="50%" direction="column">
        <Newsletter />
      </Flex>
    </Section>
  )
}

const Newsletter = ({showMore=false, ...props}) => {
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
      description:
        "Si le problème continue, n'hésite pas à m'en faire part",
      status: "error",
      duration: 4000,
      isClosable: true,
    })
  }
  const handleSubscribe = async (e) => {
    e.preventDefault()
    try {
      await Axios.post("https://api.sendinblue.com/v3/contacts", {
        email: email,
        listIds: [3]
      }, {
        headers: {
          "api-key": process.env.GATSBY_SENDINBLUE_API_KEY,
          "Content-Type": "application/json"
        }
      })
      setEmail("")
      toastSuccess()
    } catch (error) {
      toastFaillure()
    }
  }
  return (
    <Flex direction="column" {...props}>
      <form style={{ marginBottom: "0" }} onSubmit={handleSubscribe}>
        <FormControl id="name" mr="3" isRequired>
          <FormLabel fontWeight="extrabold">
            Intéressé par la Newsletter ?
          </FormLabel>
          <CoolInput
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
            placeholder="example@mail.fr"
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
          Recevoir la newsletter
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