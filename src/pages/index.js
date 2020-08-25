import React from "react"
import LayoutIndex from "../components/layoutIndex"
import { useStaticQuery, graphql } from "gatsby"
import { FaCodepen } from 'react-icons/fa';
import { TiDeviceDesktop } from "react-icons/ti";

const IndexPage = props => {

  const querySettings = useStaticQuery(graphql`
  {
    WP_1 {
      page(id: "cG9zdDoxMDI2") {
        acf_index {
          seccions {
            seccion
          }
        }
      }
    }
  }
  
  `)

  const indexSeccions = querySettings.WP_1.page.acf_index.seccions
  console.log(indexSeccions[0].seccion);

  const Curve =(props)=>{
    return <div className={props.classname} >
      <svg className="svgCurve" fill="#44405a" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 1 1024 107" preserveAspectRatio="none"><path className="st4" d="M0 0h1024v77.3c-49-20.1-120.5-42.4-193.2-42.1-128.9.5-159.8 72.3-255.8 72.3-89.1 0-134.7-80.2-245-82-110.4-1.8-160.9 57.2-280 59.2-17.2.3-33.9-1.8-50-5.7V0z"></path></svg>
      </div>
  }

  const Content =(props)=>{
    //Jala el contenido de index por numero
    //seccion 1 , 2 si existe
    if(indexSeccions[props.number]){
    return (
      <div  dangerouslySetInnerHTML={{__html: indexSeccions[props.number].seccion}} />
    )
  }else{
    return ''
  }
  }

  return (
    <LayoutIndex>
      <div className="div-center section color1">
        <div className="wrap">
            <div className="container mainText boxes4">
            <Content number={0} />
            </div>
          </div>
      </div>

    

      <div className={`div-center parallax parallax1 bgBlue`} >
        <div className="wrap">
            <div className="container mainText boxes2">
              <Content number={1} />
            </div>
          </div>
      </div>
    
      <div className="div-center section fullBox">
        <div className="wrap">
              <div className="container mainText boxes2">
              <Content number={2} />
              </div>
          </div>
      </div>
   
      <div className="div-center section parallax parallax1 `" style={{ backgroundImage:`url(https://www.gatsby.mariolafuente.com/wp-content/uploads/2020/08/game-development-Costa-ric-pa.jpg)`}} >
        <div className="wrap">
              <div className="container mainText boxes2">
              <Content number={3} />
              </div>
          </div>
      </div>
   
  


    </LayoutIndex>
  )
}





export default IndexPage
