import React from "react"

import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import Contact from "../components/Contact/contact"
import Work from "../components/Work/work"
import Value from "../components/Value/value"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="mari goto" description={"Marina is a frontend developer based in Oslo."} />
    <Hero />
    <Work />
    <Value />
    <Contact />
  </Layout>
);

export default IndexPage
