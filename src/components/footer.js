import React from "react"
import { Link } from "gatsby"
import SocialIcons from "./socialIcons"

const Footer = props => {

  // console.log(props);

  //go TOP Scroll ****************************************************
  const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY
    // Set a variable for our button element.
    const scrollToTopButton = document.getElementById("scrollDiv")

    if (y > 0) {
      scrollToTopButton.className = "top-link show"
    } else {
      scrollToTopButton.className = "top-link hide"
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }


  if (typeof window === 'undefined'){
    console.log('Window is not there')
  }else{
  //IF scroll DIV //go TOP Scroll
  window.addEventListener("scroll", scrollFunc)
  }


  

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div id="logo" className="logo">
            <Link to={`/`} className="logo ">
              <img src={props.logoUrl} alt={props.logoAlt} />
            </Link>
            <div className="text">{props.logoText}</div>
          </div>

          <div className="social-wrap">
            <SocialIcons social={props.social} />
            <div className="usaPhone"  onClick={()=>{window.location = `tel:+${props.phone2}`}} > +USA {props.phone2}</div>
          </div>
        </div>
      </div>

      <div id="scrollDiv" className="to-top-right hide">
        <a
          id="scrollTop"
          onClick={() => topFunction()}
          className="screen-reader-text"
        >
          ▲
        </a>
      </div>
    </footer>
  )
}

export default Footer
