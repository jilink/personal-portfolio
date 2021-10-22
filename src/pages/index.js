import React from "react"

import SEO from "../components/seo"
import Contact from "../components/sections/contact"
import Home from "../components/sections/home"
import Projets from "../components/sections/projets"
import Competences from "../components/sections/competences"

const IndexPage = () => (
  <>
    <SEO title="Jimmy Soussan" />
    <Home />
    <Projets />
    <Competences />
    <Contact />
  </>
)

export default IndexPage
