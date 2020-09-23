import React from "react"
import AwesomeSlider from "react-awesome-slider"
import { useStaticQuery, graphql } from "gatsby"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"

const SliderIndex = props => {
  const querySlider = useStaticQuery(graphql`
  {
    WP_1 {
      hDsettings {
        nodes {
          acf_headline {
            headline {
              videoUrl
              desktop {
                backgroundImg {
                  sourceUrl
                }
                hPosition
                vPosition
                text
                images {
                  sourceUrl
                  link
                }
                bgcolor
                bgSize
                imageVerticalPosition
                imageHorizontalPosition
                link
              }
              mobile {
                hPosition
                vPosition
                text
                backgroundImg {
                  sourceUrl
                }
                images {
                  sourceUrl
                }
              }
              controls {
                desktopImgSwitch
                mobileImgSwitch
                textSwitch
                videoImgSwitch
              }
            }
          }
        }
      }
    }
  }
  `)

  const headlinesArray =
    querySlider.WP_1.hDsettings.nodes[0].acf_headline.headline

  const bannerArray = headlinesArray.map((headline, index) => {
    
    const {
      textSwitch,
      videoImgSwitch,
      mobileImgSwitch
    } = headline.controls

    const {
      backgroundImg,
      images,
      vPosition,
      hPosition,
      bgcolor,
      text,
      bgSize,
      link,
      imageVerticalPosition: imgV,
      imageHorizontalPosition: imgH,
    } = headline.desktop
  
    const {
      text: movTextSwitch,
      backgroundImg: movbg,
      images: movImages
    } = headline.mobile


    const videoUrl = headlinesArray.videoUrl

    function bgUrl() {
      if (videoImgSwitch) {
        return videoUrl
      } else {

        if(backgroundImg){
          return backgroundImg.sourceUrl
        }else{
          return ''
        }
        
      }
      return ""
    }
    const headlineContent = () => {
      //console.log(`buscando img mobile ${JSON.stringify(movbg)}`)
      // if(movbg){
      //   console.log(`xxxxxxx ${JSON.stringify(movbg)}`);
      //   console.log(`movImages ${movbg}`);
      // }
     

      if (images && !textSwitch && !mobileImgSwitch) {
        return <div className={`desktopHeadline`} style={{ justifyContent: imgH, alignItems:imgV}} >
          <img loading="lazy" src={`${images.sourceUrl}`} alt={`${images.altText}`} />
          </div>
      }
      if (movbg && !textSwitch && mobileImgSwitch) {
        return <div className={`movileHeadline`} style={{ justifyContent: imgH, alignItems:imgV}} >
          <img loading="lazy" src={`${movbg.sourceUrl}`} alt={`${movbg.altText}`} />
          </div>
      }

      if (images && textSwitch) {
        return <div className={`bannerHolder XXX2 ${mobileImgSwitch}`} style={{ justifyContent: imgH, alignItems:imgV}} >
          <img loading="lazy" src={`${images.sourceUrl}`} alt={`${images.altText}`} />
          <div className="bannertext" dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
        </div>
      }
      if (textSwitch) {
        return <div className={`bannerHolder XXX3  ${mobileImgSwitch}`} style={{ justifyContent: imgH, alignItems:imgV}} >
          <div className="bannertext" dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
        </div>
      }

      return ""

    }

   const clickHeadline=()=>{
     if(link){
      window.open(link, "_self")
      }
   }

    return (
      <div key={index} onClick={()=>clickHeadline()} style={{backgroundPositionY:vPosition, backgroundPositionX: hPosition, backgroundSize:bgSize, backgroundColor:bgcolor}} >
        {headlineContent()}
      </div>
    )
  })

  //className={`headlineMobile-${mobileImgSwitch}`}  style={{backgroundPositionY:vPosition, backgroundPositionX: hPosition, backgroundSize:bgSize, backgroundColor:bgcolor, backgroundImage: `url(${bgUrl()})` }  }
 

  const AutoplaySlider = withAutoplay(AwesomeSlider)

  const Slider = (
    <AutoplaySlider
      // animation="cubeAnimation"
      animation="foldOutAnimation"
      className="ASlider"
      bullets={false}
      fillParent={false}
      organicArrows={true}
      startup={true}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={56000}
    >
      {bannerArray}
    </AutoplaySlider>
  )

  return Slider
}

export default SliderIndex
