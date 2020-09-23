import React,{useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const MenuItems = () => {
  const [lngState, setLngState] = useState(`top-menu`);
  const queryMenu = useStaticQuery(graphql`
  {
    WP_1 {
      menus {
        nodes {
          slug
          menuItems(first: 50) {
            nodes {
              id
              label
              cssClasses
              path
              childItems {
                nodes {
                  url
                  label
                  title
                  target
                  cssClasses
                  path
                }
              }
              parentId
            }
          }
        }
      }
    }
  }
  `)


  useEffect(() => {
    const lenguage = localStorage.getItem("lng")
    if(lenguage){
      setLngState(lenguage)
    }
    
  }, []); // Only re-run the effect if count changes



  //let childItem = queryMenu.WP_1.menus.nodes
  const allMenus = queryMenu.WP_1.menus.nodes

  const MenuMain = () => {
    return allMenus.map((menu, i) => {


      //Menu english
      if (lngState === 'eng' && (menu.slug === `top-menu-eng`) ) {
   
              return (
                <ul key={i} className="menu">
                  {menu.menuItems.nodes.map((link, ii) => {
                    //destructuring variables
                    let { id, label, path, childItems, parentId} = link
        
                if(parentId === null){
                  //si no tiene parentId es menu base
                  return (
                    <li key={id} className={`subLink`}>
                    <a href={path}>{label} </a>
              
                        <ul className="submenu">
                        { //Submenu
                          childItems.nodes.map((obj2, iii) => (
                            <li key={iii} className={`subChildren `}>
                            <Link  className={`${obj2.cssClasses}`} to={obj2.path}>{obj2.label}</Link>
                            </li>
                          ))
                        }
                        </ul>
        
                    </li>
                  )
                }
          
        
                  })}
                </ul>
              )

      }    
      
      
      
      if (lngState !== 'eng' && (menu.slug === `top-menu`) ) {
   
        return (
          <ul key={i} className="menu">
            {menu.menuItems.nodes.map((link, ii) => {
              //destructuring variables
              let { id, label, path, childItems, parentId} = link
  
          if(parentId === null){
            //si no tiene parentId es menu base
            return (
              <li key={id} className={`subLink`}>
              <a href={path}>{label} </a>
        
                  <ul className="submenu">
                  { //Submenu
                    childItems.nodes.map((obj2, iii) => (
                      <li key={iii} className={`subChildren `}>
                      <Link  className={`${obj2.cssClasses}`} to={obj2.path}>{obj2.label}</Link>
                      </li>
                    ))
                  }
                  </ul>
  
              </li>
            )
          }
    
  
            })}
          </ul>
        )

}




    })

  }



  return (
    <MenuMain />
  )
}

export default MenuItems
