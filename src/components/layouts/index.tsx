import * as React from "react"
import { ReactNode } from "react"
import Header from "../header/header"
import "./styles.css"
import { IntlProvider } from "react-intl"
import { useLocation } from "@reach/router"
import LanguageService from "../../services/LanguageService"
import Footer from "../footer/footer"

interface Props {
  children: ReactNode;
  messages: Record<string, string>;
}

const Layout = (props: Props) => {
  const { children, messages } = props
  const location = useLocation()

  const url = location.pathname
  const locale = LanguageService.getCurrent(url) ?? ""

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
    >
      <Header />

      <main>{children}</main>

      <Footer />
    </IntlProvider>
  )
}

export default Layout