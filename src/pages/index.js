import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>We are Shanti Hostel, home away from home in Skopje.</h2>
      <p>
        Do you need accommodation? <Link to="/contact">Contact us</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
