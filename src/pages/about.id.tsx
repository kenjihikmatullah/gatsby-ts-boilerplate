// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts"
import Seo from "../components/seo"
import { FormattedMessage } from "react-intl"
import messages from "../languages/messages/id"

const AboutPage = () => {
  return (
    <Layout messages={messages}>
      <Seo title="Menggunakan TypeScript" />
      <h1>
        <FormattedMessage
          id={"title"}
          defaultMessage={"Gatsby mendukung TypeScript secara default!"}
        />
      </h1>
      <p>
        This means that you can create and write <em>.ts/.tsx</em> files for your
        pages, components etc. Please note that the <em>gatsby-*.js</em> files
        (like gatsby-node.js) currently don't support TypeScript yet.
      </p>
      <p>
        For type checking you'll want to install <em>typescript</em> via npm and
        run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
      </p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/typescript/">
          documentation about TypeScript
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default AboutPage
