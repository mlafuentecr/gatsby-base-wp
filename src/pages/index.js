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


  return (
    <LayoutIndex>
      <div className="div-center section color1">
        <div className="wrap">
          <div className="container mainText">

          <div dangerouslySetInnerHTML={{__html: indexSeccions[0].seccion}} />
         
          </div>
          </div>
      </div>

      <Curve  classname="color2 hr-curve" />


        <div className="div-center section color2 full">
        <div className="wrap">
          <div className="container mainText">
            <div dangerouslySetInnerHTML={{__html: indexSeccions[0].seccion}} />
          </div>
          </div>
      </div>
      <Curve  classname="color2 invert  hr-curve" />
        {/* <Curve  classname="color2  hr-curve" /> */}
       
      <div className="div-center section fullBox">
        <div className="wrap">
          <div className="container mainText">
          <div dangerouslySetInnerHTML={{__html: indexSeccions[0].seccion}} />
          </div>
          </div>
      </div>
   

      <div className={`div-center parallax parallax1`} style={{ backgroundImage:`url(https://www.gatsby.mariolafuente.com/wp-content/uploads/2020/08/sertvices.jpg)`}} >
      <div className="wrap">
          <div className="container mainText">
          <div dangerouslySetInnerHTML={{__html: indexSeccions[0].seccion}} />
          </div>
          </div>
      </div>


    </LayoutIndex>
  )
}





export default IndexPage
