import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const MenuItems = () => {
  const [showSubmenu] = useState(true)

  const queryMenu = useStaticQuery(graphql`
    {
      WP_1 {
        menus {
          nodes {
            slug
            menuItems {
              nodes {
                id
                label
                cssClasses
                path
                childItems {
                  nodes {
                    id
                    url
                    label
                    title
                    target
                    cssClasses
                    path
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  //let childItem = queryMenu.WP_1.menus.nodes
  const allMenus = queryMenu.WP_1.menus.nodes

  console.log(allMenus)

  const LinkArrow = props => (
    <span
      className="linksSubmenu"
      role="button"
      onClick={function (event) {
        event.target.parentElement.parentElement.classList.toggle("open")
      }}
    ></span>
  )

  const MenuMain = () => {
    return allMenus.map((menu, i) => {
      if (menu.slug === `top-menu`) {
        return (
          <ul key={i} className="menu">
            {menu.menuItems.nodes.map((link, ii) => {
              //destructuring variables
              let { id, label, path, childItems } = link

              return (
                <div key={ii} className={`parent`}>
                  <li key={id} className={`subLink`}>
                    <a href={path}>{label}</a>
                    <ul className="submenu">
                      {childItems.nodes.map((obj2, iii) => (
                        <li key={iii} className="subChildren">
                          <a href={obj2.path}>{obj2.label}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </div>
              )
            })}
          </ul>
        )
      }
    })
  }

  return (
    <div className="nav-wrap">
      <div className="btn-menu">
        <span></span>
      </div>

      <nav id="mainnav" className="mainnav">
        <MenuMain />
      </nav>
    </div>
  )
}

export default MenuItems
