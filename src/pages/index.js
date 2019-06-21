import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h3>We are Shanti Hostel, home away from home in Skopje.</h3>
      <p>
        Do you need accommodation? <Link to="/contact">Contact us</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
