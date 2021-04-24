import { RouteComponentProps } from "@reach/router"
import * as React from "react"

interface Params {
  slug?: string;
}

const ArticlePage = (props: RouteComponentProps<Params>) => {
  const { slug } = props;

  return (
    <div>Article page: {slug}</div>
  )
};

export default ArticlePage;