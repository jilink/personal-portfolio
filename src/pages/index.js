import React from "react"

import SEO from "../components/seo"
import Contact from "../components/sections/contact"
import Home from "../components/sections/home"
import Projets from "../components/sections/projets"

const IndexPage = () => (
  <>
    <SEO title="Jimmy Soussan"/>
    <Home/>
    <Projets/>
    <Contact />
  </>
)

export default IndexPage
