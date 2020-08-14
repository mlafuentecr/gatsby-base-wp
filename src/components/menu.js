import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"


const MenuItems = () => {


  const queryMenu = useStaticQuery(graphql`
  {
    WP_1 {
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





  return (
    <ul className="menu">
      <li className="home">
        <a href="index.html">Home</a>
        <ul className="submenu">
          <li>
            <a href="index.html">Home 01</a>
          </li>
          <li>
            <a href="index-v2.html">Home 02</a>
          </li>
          <li>
            <a href="index-v3.html">Home 03</a>
          </li>
          <li>
            <a href="index-v4.html">Home 04</a>
          </li>
          <li>
            <a href="index-v5.html">Home 05</a>
          </li>
          <li>
            <a href="index-v6.html">Home 06</a>
          </li>
          <li>
            <a href="index-v7.html">Home 07</a>
          </li>
        </ul>
      </li>
      <li>
        <Link to="page-2">About Us</Link>
      </li>
      <li>
        <a href="services.html">Services</a>
        <ul className="submenu">
          <li>
            <a href="services.html">Services</a>
          </li>
          <li>
            <a href="services-single.html">Services Single</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="case-v1.html">Cases</a>
        <ul className="submenu">
          <li>
            <a href="case-v1.html">Case V1</a>
          </li>
          <li>
            <a href="case-v2.html">Case V2</a>
          </li>
          <li>
            <a href="case-single-v1.html">Case Single V1</a>
          </li>
          <li>
            <a href="case-single-v2.html">Case Single V2</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="blog.html">News</a>
        <ul className="submenu">
          <li>
            <a href="blog.html">Blog V1</a>
          </li>
          <li>
            <a href="blog-v2.html">Blog V2</a>
          </li>
          <li>
            <a href="blog-single.html">Blog single</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="partner.html">Pages</a>
        <ul className="submenu">
          <li>
            <a href="history.html">History</a>
          </li>
          <li>
            <a href="partner.html">Partner</a>
          </li>
          <li>
            <a href="team-v1.html">Team V1</a>
          </li>
          <li>
            <a href="team-v2.html">Team V2</a>
          </li>
          <li>
            <a href="overview.html">Overview</a>
          </li>
          <li>
            <a href="header.html">Header</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="contact.html">Contact Us</a>
      </li>
    </ul>
  )
}

export default MenuItems;

