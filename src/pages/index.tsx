import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextEvent from "../components/NextEvent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NextEvent
      title={"January Jam Session"}
      date={"Wednesday 11th January"}
      startTime={"8:00pm"}
      finishTime={"10.00pm"}
      venue={"The Scout Hut, Forest Row"}
      url={"https://fb.me/e/3lP1qasuS"}
    />
  </Layout>
)

export default IndexPage
