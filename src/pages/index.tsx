import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextEvent from "../components/NextEvent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NextEvent
      date={"Tuesday 18th February"}
      startTime={"8:30pm"}
      finishTime={"10.30pm"}
      venue={"The Scout Hut, Forest Row"}
    />
  </Layout>
)

export default IndexPage
