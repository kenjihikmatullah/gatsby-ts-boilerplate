import { RouteComponentProps } from "@reach/router"
import * as React from "react"

// import styles from './styles.module.scss'

interface Params {
  slug?: string;
}

const ArticlePage = (props: RouteComponentProps<Params>) => {
  const { slug } = props

  return (
    <div className={"styles.message"}>Article page: {slug}</div>
  )
}

export default ArticlePage