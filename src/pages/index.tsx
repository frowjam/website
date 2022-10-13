import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextEvent from "../components/NextEvent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NextEvent
      title={"November Jam Session"}
      date={"Wednesday 9th November"}
      startTime={"8:00pm"}
      finishTime={"10.00pm"}
      venue={"The Scout Hut, Forest Row"}
    />
  </Layout>
)

export default IndexPage
