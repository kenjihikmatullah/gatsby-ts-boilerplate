import { Router } from "@reach/router"
import * as React from "react"
import ArticlesPage from "../app/articles"
import ArticlePage from "../app/article"

const App = () => {
  return (
    <Router basepath={"/app"}>
      <ArticlesPage path={"articles"} />
      <ArticlePage path="articles/:slug" />
    </Router>
  )
}

export default App