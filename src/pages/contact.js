import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Us</h1>
      <p>telephone: +389 2 60 90 807</p>
      <p>str.rade Jovcevski Korcagin 11</p>
      <p>Skopje</p>
      <p>Macedonia</p>
      <p>
        reach Shanti Hostel via
        <a href="https://www.facebook.com/shantihostels" target="_blank">
          Facebook
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
