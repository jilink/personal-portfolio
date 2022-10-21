import React, { useState, useEffect } from "react"
import { Text, Flex } from "@chakra-ui/react"
import { MotionFlex } from "./MotionBox"

const Testimonials = ({ ...props }) => {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [currentPositionBg, setCurrentPositionBg] = useState(0)
  const testimonials = [
    {
      catchPhrase: "Quel bg ce mec",
      testimonial:
        "Nous avons travaillé ensemble en remote pendant 3 mois, un jour je le rencontre enfin IRL et je me dis mais quel bg ce mec",
      author: "Mark",
      occupation: "CEO de Mcdonald's",
    },
    {
      catchPhrase: "Le nouveau Bill Gates",
      testimonial:
        "Après avoir travaillé ensemble en remote pendant 3 mois, un jour je le rencontre enfin IRL et je me dis mais c'est le nouveau Bill Gates",
      author: "Bill",
      occupation: "PDG de Microsoft",
    },
    {
      catchPhrase: "Au delà du réel",
      testimonial:
        "La prestation a été au delà du réel, en plus de notre site, Cozy Codeur a fabriqué une voiture autonome qu'il nous a offerte",
      author: "Carole",
      occupation: "CEO de Figma",
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
    }, [testimonials])

  return (
    <MotionFlex
      key={currentPosition}
      bg="white"
      color="black"
      direction="column"
      border="1px solid"
      w="100%"
      textAlign="center"
      justify="space-between"
      initial={{ opacity: 0, rotate: 0}}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 },
      }}
      exit={{ opacity: 0 }}
      {...props}
    >
      <Text m="3" fontSize="3xl" fontWeight="bold">
        “{testimonials[currentPosition].catchPhrase}”
      </Text>
      <Text m="8" fontSize="md">
        “{testimonials[currentPosition].testimonial}”
      </Text>
      <Flex
        bg={bgs[currentPositionBg]}
        textAlign="center"
        justify="center"
        p="3"
        direction="column"
      >
        <Text>{testimonials[currentPosition].author}</Text>
        <Text fontWeight="black">
          {testimonials[currentPosition].occupation}
        </Text>
      </Flex>
    </MotionFlex>
  )
}
export default Testimonials
