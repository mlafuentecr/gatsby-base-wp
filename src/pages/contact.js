import React  from "react"
import LayoutIndex from "../components/layoutinternal"
import ContactFormBasic from "../components/form"
import Zoom from "react-reveal/Zoom"

const ContactForm = () => {
 

  return (
    <LayoutIndex>
      <Zoom>
        <ContactFormBasic />
      </Zoom>
    </LayoutIndex>
  )
}

export default ContactForm
