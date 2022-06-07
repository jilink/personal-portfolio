import React from 'react'
import Section from './sections/Section';
import Axios from "axios"
import { Box, Link} from '@chakra-ui/layout';
import { CoolInput } from './sections/contact';
import {CoolButtonSubmit} from './CoolButton';
import { Link as ReachLink } from "gatsby"
import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';

const NewsletterSection = () => {
  return (
    <Section><Newsletter/></Section>
  )
}

const Newsletter = ({showMore=false}) => {
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState("")
  const [success, setSuccess] = React.useState("")
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
      setSuccess("Merci pour votre inscription !")
      setEmail("")
    } catch (error) {
      setError("Il y a eu un soucis lors de l'inscription")
    }
  }
  return (
    <Flex direction="column">
      <form onSubmit={handleSubscribe}>
      <CoolInput type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="example@mail.fr"/>
      <CoolButtonSubmit disabled={!email} bg="greenblue"
        onClick={() => {
          console.log("add")
        }}
      >
        Recevoir la newsletter
      </CoolButtonSubmit>
      </form>
      {showMore && (
        <Link
          as={ReachLink}
          to={`/newsletter`}
          style={{ boxShadow: "none" }}
          _hover={{ textDecoration: "none", color: "secondary" }}
        >
          <Text display="block">
            En savoir plus
          </Text>
        </Link>
      )}
    </Flex>
  )
}
export default NewsletterSection