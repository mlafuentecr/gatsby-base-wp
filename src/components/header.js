import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import MenuItems from './menu'

const Header = props => {
  const querySettings = useStaticQuery(graphql`
    {
      WP_1 {
        allSettings {
          generalSettingsTitle
          generalSettingsDescription
          generalSettingsUrl
        }
        hDsettings {
          nodes {
            acf_settings {
              social {
                link
                icon
              }
              siteLogo {
                sourceUrl
                altText
              }
              seo {
                siteTitle
                metaDescription
                keywords
              }
              secondColor
              mainColors
              contactInfo {
                contactInfo
                email
                phonePrincipal
              }
            }
          }
        }
      }
    }
  `)

    //Site ACF
    const siteSetting = querySettings.WP_1.hDsettings.nodes[0].acf_settings;
    const logoUrl = siteSetting.siteLogo.sourceUrl
    const logoAlt = siteSetting.siteLogo.altText

  const [draw, setDraw] = useState(false)





  return (
    <>
      <header id="header" className="header style-color clearfix">
        <div className="container">
          <div className="header-wrap clearfix">
            <div id="logo" className="logo">
              <Link to={`/`} className="logo ">
                <img src={logoUrl} alt={logoAlt} />
              </Link>
            </div>

            <div className="nav-wrap">
              <div className="btn-menu" rel="drawIcon">
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
