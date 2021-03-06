import React from "react"
import { FaSkype, GrYoutube, FaLinkedinIn, FaInstagramSquare, FaTwitterSquare, FaGithub, FaFacebookSquare, FaPhone, FaWhatsapp} from "react-icons/fa"
const SocialIcons = (props) => {

 
  const IconChoose = (nameIcon, namelink) => {
    switch (nameIcon) {
      case "FaFacebookSquare":
        return <FaFacebookSquare onClick={()=>{window.location = `${namelink}`}} />
        break
      case "FaLinkedinIn":
        return <FaLinkedinIn onClick={()=>{window.location = `${namelink}`}}/>
        break
      case "FaGithub":
        return <FaGithub onClick={()=>{window.location.href = `${namelink}`}} />
        break
      case "FaTwitterSquare":
        return <FaTwitterSquare onClick={()=>{window.location = `${namelink}`}} />
        break
      case "FaInstagramSquare":
        return <FaInstagramSquare onClick={()=>{window.location = `${namelink}`}} />
        break
      case "GrYoutube":
        return <GrYoutube onClick={()=>{window.location = `${namelink}`}} />
        break
      case "FaSkype":
        return <FaSkype onClick={()=>{window.location = `skype:${namelink}?chat`}} />
        break
        case "FaWhatsapp":
          return <FaWhatsapp onClick={()=>{window.location = `https://api.whatsapp.com/send?phone=${namelink}&text=Hola%20Mario%20estoy%20interesado%20en%20`}} />
          break
      default:
        return <FaPhone onClick={()=>{window.location = `tel:+${namelink}`}}/>
    }
  }

 const socialItems = props.social

  return (
    <ul>
      {socialItems.map((item, i) => (
        <li key={i}>
          {IconChoose(item.icon, item.link)}
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons;