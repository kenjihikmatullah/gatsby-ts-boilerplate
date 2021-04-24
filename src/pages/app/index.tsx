import { Router } from "@reach/router"
import * as React from "react"
import ArticlesPage from "./articles"

const App = () => {
  return (
    <Router>
      <Router basepath={'/articles'} component={ArticlesPage} />
    </Router>
  );
};

export default App;