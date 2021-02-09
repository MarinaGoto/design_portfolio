import React from "react"

import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="mari goto" description={"Marina is a frontend developer based in Oslo."} />
    <Hero />
  </Layout>
);

export default IndexPage
