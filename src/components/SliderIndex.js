import React from "react"
import AwesomeSlider from "react-awesome-slider"
import { Link, useStaticQuery, graphql } from "gatsby"
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
      desktopImgSwitch,
      mobileImgSwitch,
      textSwitch,
      videoImgSwitch,
    } = headline.controls
    const {
      backgroundImg,
      images,
      vPosition,
      hPosition,
      bgcolor,
      text,
    } = headline.desktop
    const {
      backgroundImg: bgMobile,
      images: imgMobile,
      text: textMobile,
    } = headline.mobile
    const videoUrl = headlinesArray.videoUrl

    function bgUrl() {
      if (videoImgSwitch) {
        return videoUrl
      } else {
        if(backgroundImg.sourceUrl != null){
          return backgroundImg.sourceUrl
        }else{
          return ''
        }
        
      }
      return ""
    }
    const headlineContent = () => {

      if (images && !textSwitch) {
        return <div style={{ justifyContent: hPosition, alignItems:vPosition}} >
          <img src={`${images.sourceUrl}`} alt={`${images.altText}`} />
          </div>
      }

      if (images && textSwitch) {
        return <div className='bannerHolder' style={{ justifyContent: hPosition, alignItems:vPosition}} >
          <img src={`${images.sourceUrl}`} alt={`${images.altText}`} />
          <div className="bannertext" dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
        </div>
      }
      if (textSwitch) {
        return <div className='bannerHolder' style={{ justifyContent: hPosition, alignItems:vPosition}} >
          <div className="bannertext" dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
        </div>
      }

      return ""

    }

   

    return (
      <div key={index} style={{ backgroundColor:bgcolor, backgroundImage: `url(${bgUrl()})` }}>
        {headlineContent()}
      </div>
    )
  })

 

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
