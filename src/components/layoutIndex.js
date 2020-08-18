import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./styles/global.css"
import SliderIndex from "../components/SliderIndex"

import handleChick from "./handleClick"

const LayoutIndex = ({ children }) => {
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
              phone2
              phone3
              openAccount
              openAccountText
            }
            logoText
          }
        }
      }
    }
  }
  `)

  //Site ACF
  const siteSetting = querySettings.WP_1.hDsettings.nodes[1].acf_settings //settings
  const {
    siteLogo,
    seo,
    social,
    mainColors,
    secondColor,
    phone2,
    logoText,
    contactInfo,
  } = siteSetting

 
  return (
    <div className={`pgindex wrapper`} onClick={handleChick}>
      <Header
        logoUrl={siteLogo.sourceUrl}
        logoAlt={siteLogo.altText}
        siteTitle="mariolafuente.com"
      />
      <SliderIndex />
      <main>{children}</main>
      <Footer
        logoUrl={siteLogo.sourceUrl}
        logoAlt={siteLogo.altText}
        logoText={logoText}
        social={social}
        phone2={contactInfo.phone2}
      />
    </div>
  )
}

export default LayoutIndex
