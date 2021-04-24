import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import * as styles from './styles.module.scss';

const ArticlesPage = (props: RouteComponentProps) => {
  return (
    <div className={styles.message}>This is articles page</div>
  )
};

export default ArticlesPage;