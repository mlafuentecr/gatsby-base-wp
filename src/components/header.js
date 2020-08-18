import React, { useState, useEffect } from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"
import MenuItems from "./menu"

const Header = props => {
  return (
    <>
      <SEO title={props.siteTitle} />
      <header id="header" className="header style-color clearfix">
        <div className="container">
          <div className="header-wrap clearfix">
            <div id="logo" className="logo">
              <Link to={`/`} className="logo ">
                <img src={props.logoUrl} alt={props.logoAlt} />
              </Link>
            </div>

            <div className="nav-wrap">
              <div className="btn-menu">
                <span></span>
              </div>

              <nav id="mainnav" className="mainnav">
                <MenuItems />
              </nav>

            </div>
          </div>
        </div>
      </header>

      <nav id="mainnav-mobi" className="mainnav">
        <MenuItems />
      </nav>
    </>
  )
}

export default Header
