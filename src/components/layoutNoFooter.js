import React,{useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import './styles/global.css'
import Modal  from 'simple-react-modal'

import handleChick from './handleClick'

const LayoutIndex = (props) => {
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
  siteLogo
} = siteSetting


 
 


function handleChick1(e) {
  //OPEN IMAGE *********************************
    if(e.target.dataset.fullUrl){
      setShowModal(true)
      setModalContent(`<image  src="${e.target.dataset.fullUrl}"/>`)
    }else{
   //Check real Click
   handleChick(e)
    }
}


  return (
    <>
      <div className={`pgInternal wrapper ${props.nameType}`}    onClick={handleChick1}>
        <Header
          logoUrl={siteLogo.sourceUrl}
          logoAlt={siteLogo.altText}
        />
        <main >{props.children}</main>

        <Modal show={showModal}  containerStyle={{ maxWidth:"800px" , width:"80%"}} >
          <div className="close" onClick={()=>setShowModal(false)}>X</div>
          <div dangerouslySetInnerHTML={{__html: modalContent}}/>
        </Modal>

      
      </div>
      </>
  )
}

export default LayoutIndex
