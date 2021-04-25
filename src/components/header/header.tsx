import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import languages from "../../languages/languages"
import { useLocation } from "@reach/router"
import LanguageService from "../../services/LanguageService"

const Header = () => {
  const location = useLocation()

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            Tes
          </Link>
        </h1>
      </div>

      {
        languages.all.map(lang => {
          return (
            <Link to={LanguageService.change(location.pathname, lang)}>
              {lang}
            </Link>
          )
        })
      }
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
