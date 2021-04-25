import React, { ComponentType } from "react"
import Layout from "./index"

interface Props {
  Component: ComponentType<any>;
  messages: Record<string, string>;
}

const withLayout = (props: Props) => {
  const { Component, messages } = props

  return () => {
    return (
      <Layout messages={messages}>
        <Component />
      </Layout>
    )
  }
}

export default withLayout