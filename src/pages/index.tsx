import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextEvent from "../components/NextEvent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NextEvent
      title={"October Jam Session"}
      date={"Wednesday 12th October"}
      startTime={"8:00pm"}
      finishTime={"10.00pm"}
      venue={"The Scout Hut, Forest Row"}
    />
  </Layout>
)

export default IndexPage
