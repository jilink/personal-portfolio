import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="index" />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
