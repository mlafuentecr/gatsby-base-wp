import React, { useState, useEffect  } from 'react';
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



 
let classPg = window.location.pathname
classPg=classPg.replace(/[\/\\]/g,'');

console.log(`siteSetting`);
console.log(classPg);

function handleChick1(e) {
  //OPEN IMAGE *********************************
    if(e.target.dataset.fullUrl){
      setShowModal(true)
      setModalContent(`<image width="800px" src="${e.target.dataset.fullUrl}"/>`)
    }else{
   //Check real Click
   handleChick(e)
    }
    
 
}

  return (
    <>
      <div className={`pgInternal wrapper ${classPg}` }    onClick={handleChick1}>
        <Header
          logoUrl={siteLogo.sourceUrl}
          logoAlt={siteLogo.altText}
        />
        <main >{children}</main>

        <Modal show={showModal}  containerStyle={{ maxWidth:"800px" , width:"80%"}} >
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
