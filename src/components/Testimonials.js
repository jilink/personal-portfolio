import React, { useState, useEffect } from "react"
import { Text, Flex, Link, Grid, GridItem } from "@chakra-ui/react"
import { MotionFlex } from "./MotionBox"
import { Button } from '@chakra-ui/button';

const Testimonials = ({ ...props }) => {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [currentPositionBg, setCurrentPositionBg] = useState(0)
  const testimonials = [
    {
      catchPhrase: "Toujours à l'écoute et TRES pro!",
      testimonial:
        "Nous sommes toujours très satisfaites du travail que Jimmy fait pour notre PWA Know It! [...] Il est toujours à l'écoute et TRES pro! [...] et en plus, il parle anglais. 5 étoiles pour Jimmy !!!!",
      author: "Sandra",
      occupation: "Co-fondatrice de BluePopcorn Production",
    },
    {
      catchPhrase: "Nous avons très bien été accompagné",
      testimonial:
        "Jimmy nous a accompagné dans le développement d'une plateforme de Cashback. [...] Nous avons très bien été accompagné tous le long de la collaboration. Nous le recommandons vivement.",
      author: "Jordan",
      occupation: "CEO à Aileen",
    },
    {
      catchPhrase: "He is reliable, professional and very pleasant to work with",
      testimonial:
        "Jimmy is a very diligent coder with great insight and ideas. [..] We will definitely call on him for further development as he is reliable, professional and very pleasant to work with.",
      author: "Kathrina",
      occupation: "Co-fondatrice de BluePopcorn Production",
    },
    {
      catchPhrase: "Sérieux et rigoureux.",
      testimonial:
        "Toujours un plaisir de travailler avec Jimmy. Sérieux et rigoureux.",
      author: "Maxime",
      occupation: "De Whatsonweb",
    },
    {
      catchPhrase: "Merci à Jimmy pour son professionnalisme",
      testimonial:
        "Merci à Jimmy pour son professionnalisme, sa réactivité et sa capacité d'adaptation.",
      author: "Trinh",
      occupation: "De Gaming Campus",
    },
  ]

  const bgs = ["#EF5A24", "greenblue"]

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPosition(currentPosition => {
          return (currentPosition + 1) % testimonials.length
        })
        setCurrentPositionBg(currentPositionBg => {
          return (currentPositionBg + 1) % bgs.length
        })
      }, 6000)
      return () => clearInterval(interval)
    }, [testimonials, bgs])

  return (
    <Flex direction="column">
      <MotionFlex
        key={currentPosition}
        bg="white"
        color="black"
        direction="column"
        border="1px solid"
        w="100%"
        textAlign="center"
        justify="space-between"
        initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          rotate: [0, -6, 130, 10],
          x: [0, -70, 3000, 5000],
          y: [0, -45, 10, -5],
          // scale: [1, 1, 1.1, 1],
        }}
        transition={{
          opacity: { ease: "linear" },
          delay: 5,
          duration: 2,
        }}
        exit={{ opacity: 0 }}
        {...props}
      >
        <Text m="5" fontSize="3xl" fontWeight="bold">
          “{testimonials[currentPosition].catchPhrase}”
        </Text>
        <Text m="6" fontSize="md">
          “{testimonials[currentPosition].testimonial}”
        </Text>
        <Flex
          bg={bgs[currentPositionBg]}
          textAlign="center"
          justify="center"
          p="3"
          direction="column"
          fontSize="lg"
        >
          <Text>{testimonials[currentPosition].author}</Text>
          <Text fontWeight="black">
            {testimonials[currentPosition].occupation}
          </Text>
        </Flex>
      </MotionFlex>
      <ChooseTestimonial
        currentPosition={currentPosition}
        setCurrentPosition={setCurrentPosition}
        testimonialsNumber={testimonials.length}
      />

      <Link
        align="center"
        fontSize="2xl"
        textDecoration="underline"
        href="https://www.malt.fr/profile/jimmysoussan"
        opacity="0.8"
        bg="black"
      >
        Lire tous les avis complets
      </Link>
    </Flex>
  )
}

const ChooseTestimonial = ({ setCurrentPosition, testimonialsNumber, currentPosition }) => {

  return (
    <Grid templateColumns={`repeat(${testimonialsNumber}, 1fr)`} gap={1}>
      {[...Array(testimonialsNumber)].map((e, i) => (
        <GridItem key={i} w="100%">
        <Button
        w="100%"
        h="15px"
        transition="ease"
          onClick={() => {
            setCurrentPosition(i)
          }}
          bg="black"
          opacity={currentPosition === i ? "1" : "0.5"}
          _hover={{bg: "black"}}
        />
        </GridItem>
      ))}
    </Grid>
  )
}


export default Testimonials
