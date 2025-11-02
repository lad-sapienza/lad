import React from "react"
import { withPrefix } from "gatsby"

const Favicon = () => (
  <>
    {/* ensure root-level /favicon.ico is available for browsers that request it */}
    <link rel="shortcut icon" href={withPrefix(`/favicon.ico`)} />
    <link rel="shortcut icon" href={withPrefix("favicon/favicon.ico")} />
    <link
      rel="icon"
      type="image/x-icon"
      href={withPrefix(`favicon/favicon.ico`)}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={withPrefix(`favicon/favicon-16x16.png`)}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={withPrefix(`favicon/favicon-32x32.png`)}
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="32x32"
      href={withPrefix(`favicon/apple-touch-icon.png`)}
    />
  </>
)
export default Favicon
