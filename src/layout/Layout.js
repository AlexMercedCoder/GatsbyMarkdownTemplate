import React from "react"
import {RedH1} from "../styles/mainstyles"

const Layout = props => {
  return (
    <>
      <header>
        <RedH1><h1>Header</h1></RedH1>
      </header>
      <main>{props.children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default Layout
