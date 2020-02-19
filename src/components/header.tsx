import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import Logo from "../images/logo.svg"

const Header: FunctionComponent<{ siteTitle: string }> = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      borderBottom: "1px solid black",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <Logo width="225px" height="150px" />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
