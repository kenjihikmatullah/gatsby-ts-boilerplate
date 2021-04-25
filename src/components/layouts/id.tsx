import React from "react"
import { default as BaseLayout } from "./index"
import messages from "../../languages/messages/id"

const Layout = (props: any) => (
  <BaseLayout
    {...props}
    messages={messages}
  />
)

export default Layout