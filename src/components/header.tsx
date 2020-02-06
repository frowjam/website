import { Link } from "gatsby"
import React, { FunctionComponent } from "react"

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
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            // color: "black",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
