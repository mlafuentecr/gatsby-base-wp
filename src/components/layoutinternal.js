import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Header from './header'
import Footer from './footer'
import './styles/global.css'
import SEO from '../components/seo'
import Modal, {closeStyle} from 'simple-react-modal'

import handleChick from './handleClick'

const LayoutIndex = ({ children }) => {
const [showModal, setShowModal] = useState(false); 
const [modalContent, setModalContent] = useState(''); 


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


    // //OPEN IMAGE *********************************
    // if(e.target.dataset.fullUrl){
    //   //window.open(e.target.dataset.fullUrl); 
    //   document.getElementById("modalContent").innerHTML = `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"> `
      
    // }

 



function handleChick(e) {
  //OPEN IMAGE *********************************
    if(e.target.dataset.fullUrl){
      setShowModal(true)
      setModalContent(`<image width="800px" src="${e.target.dataset.fullUrl}"/>`)
    }
}

  return (
    <>
      <div className={`pgInternal wrapper`}    onClick={handleChick}>
        <Header
          logoUrl={siteLogo.sourceUrl}
          logoAlt={siteLogo.altText}
        />
        <main >{children}</main>

        <Modal show={showModal}  containerStyle={{width:"600px"}} >
          <div className="close" onClick={()=>setShowModal(false)}>X</div>
          <div dangerouslySetInnerHTML={{__html: modalContent}}/>
        </Modal>

        <Footer
        logoUrl={siteLogo.sourceUrl}
        logoAlt={siteLogo.altText}
        logoText={logoText}
        social={social}
        phone2={contactInfo.phone2}
      />
      </div>
      </>
  )
}

export default LayoutIndex
