import React, { useEffect, useState } from "react"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const Form = () => {


  const WEBSITE_URL = "https://www.gatsby.mariolafuente.com"
  const FORM_ID = "1132" //Form id that provides Contact Form 7

  const [fullname, setFullname] = useState("") // store token
  const [email, setEmail] = useState("") // store token
  const [subject, setSubject] = useState("") // store token
  const [message, setMessag] = useState("") // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
  const [messageSent, setMessageSent] = useState(false) // manage sent message state
  const [isSubmitting, setIsSubmitting] = useState(false) // manage sent message state

  // this effect function authenticates our subcriber user to get a token
  useEffect(() => {
    // console.log('aaaa');
    // getToken()
  }, [])



  //When Submit Form
  function handleSubmit1(event) {
  
    event.preventDefault()
    setIsSubmitting(true)

    const data = new FormData(event.target)
   
    //2 SET INFO TO SEND
    data.set("your-name", fullname)
    data.set("your-email", email)
    data.set("your-subject", subject)
    data.set("your-message", message)

    console.log(data)
    sendForm(data)
  }

  function sendForm(data) {
    //console.log('A form was submitted: ');

    fetch(
      `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
      {
        body: data,
        method: "post",
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.status === 404) {
          console.log(`eeeerrrorr`)
        } else {
          // actions taken when submission goes OK
          //resetForm()
          setIsSubmitting(false)
          setMessageSent(true)
          setIsSuccessMessage(true)

          const content = `<div><div class="box  ">
      <h2><strong>${data.message}</strong></h2>
      </div>
      <div class="box ">
      <img loading="lazy" class="alignnone size-full " src="../../marioGlasses.jpg">
      </div>
      </div>`
          document.getElementById("formbasic").innerHTML = content
        }

        console.log(data)
      })

    // const form = document.getElementsByTagName('form')[0];
    // form.submit();
  }

  useEffect(() => {
    // set timeout 3 seconds to remove error/success message.
    setTimeout(() => {
      // this will reset messageSent and isSuccessMessage state
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000)
    // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
  }, [isSuccessMessage, messageSent])



    return (
<GoogleReCaptchaProvider reCaptchaKey="6LeY0cMZAAAAAPsC-x2rHwa53LMZVbomSST8HeMC">
      <div id="formbasic">

      <form onSubmit={handleSubmit1}>
    <h3>  Hablemos y trabajemos juntos</h3>
        <fieldset>
          <div>
            <label htmlFor="fullname">Nombre*</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              onChange={e => setFullname(e.target.value)}
              value={fullname}
              required
            />
          </div>
          <div>
            <label htmlFor="email">email*</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              onChange={e => setSubject(e.target.value)}
              value={subject}
              
            />
          </div>
          <div>
            <label htmlFor="message">message*</label>
            <textarea
              id="message"
              name="message"
              type="text"
              onChange={e => setMessag(e.target.value)}
              value={message}
              required
            />
          </div>
        </fieldset>
        <div>
      
          <button className ='btn send' type="submit"  disabled={isSubmitting}>Send</button>
         
        </div>
      </form>
      </div>
      </GoogleReCaptchaProvider>
    );
  
}

export default Form;