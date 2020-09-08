import React from "react"
import LayoutIndex from "../components/layoutIndex"
import { useStaticQuery, graphql } from "gatsby"
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

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


  const Content = props => {
    //Jala el contenido de index por numero
    //seccion 1 , 2 si existe
    if (indexSeccions[props.number]) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: indexSeccions[props.number].seccion,
          }}
        />
      )
    } else {
      return ""
    }
  }

  return (
    <LayoutIndex>
      <div className="div-center section color1">
        <div className="wrap">
          <div className="container mainText boxes4">
          <Zoom left>
            <Content number={0} />
            </Zoom>
          </div>
        </div>
      </div>

      
        <div className={`div-center parallax parallax1 bgBlue`}>
          <div className="wrap">
            <div className="container mainText boxes2">
            <Bounce right>
              <Content number={1} />
              </Bounce>
            </div>
          </div>
        </div>
      

 
        <div className="div-center section section3 fullBox">
          <div className="wrap">
            <div className="container mainText boxes2">
            <Bounce left>
              <Content number={2} />
             </Bounce>
            </div>
          </div>
        </div>
     

      <div
        className="div-center section section3 parallax parallax1 `"
        style={{
          backgroundImage: `url(https://www.gatsby.mariolafuente.com/wp-content/uploads/2020/08/game-development-Costa-rica-gray.jpg)`,
        }}
      >
        <div className="wrap">
          <div className="container mainText boxes2">
          <Bounce right>
            <Content number={3} />
            </Bounce>
          </div>
        </div>
      </div>
    </LayoutIndex>
  )
}

export default IndexPage
