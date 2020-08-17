import React,{useState} from 'react';
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

console.log(allMenus);

const LinkArrow = props => (
  <span
    className="linksSubmenu"
    role="button"
    onClick={function(event) {
      event.target.parentElement.parentElement.classList.toggle('open')
    }}
  ></span>
)





  const MenuMain = ()=>{
    return (
      allMenus.map((menu, index) => {
        if (menu.slug === `top-menu`) {
          return ( <>
          {
          menu.menuItems.nodes.map((link, ii) => {
            //destructuring variables
            let { label, path, childItems } = link

            //console.log(childItems.nodes.length);
              return (
                <li key={ii} className={`parent`}>
                  <li /*to={path}*/ className={`subLink`}>
                    {label}
                    {/*ARROW MENU MOBILE <LinkArrow number={ii} />*/}
                    {childItems.nodes.length > 0 ? (
                     <ul className="submenu">
                    { (childItems.nodes.map(obj2 => 
                      <li className="subChildren">{obj2.label}</li>
                     ))}
                   </ul>
                    ) : ('')
                    }
                    
                  </li>
                  {/* SUB MENU */}
                  {childItems.nodes.length > 0 ? ( <SubMenu number={ii} />  ) : ( '' )}
                </li>
              )
          
          })}
        </ >)
        }
      }
      )
    )
  }




  //--------SUBMENU
const SubMenu = props => {
  let childItem = queryMenu.WP_1.menus.nodes
  console.log(childItem);
    return (
      <ul className={`menu`}>
        {childItem.map((subIndex, i) => {
          return (
            <li key={i}>
              <Link key={subIndex.id} className="linksMenu">
                {/* {subIndex.node.label} */}
              </Link>
            </li>
          )
        })}
      </ul>
    )

  return null
}
console.log(SubMenu);

  return (
    <div class="nav-wrap">

    <div class="btn-menu">
      <span></span>
    </div>

      <nav id="mainnav" class="mainnav">
        <ul className="menu">
          <MenuMain />
        </ul>
      </nav>
    </div>
  )
}

export default MenuItems;

