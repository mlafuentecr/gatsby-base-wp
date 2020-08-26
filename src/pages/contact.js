import React, { useEffect, useState } from 'react'
import LayoutIndex from "../components/layoutinternal"
import { useFormik } from 'formik'
import axios from 'axios'

const ContactForm = () => {
  const WEBSITE_URL = 'https://www.gatsby.mariolafuente.com';
  const FORM_ID = '1132'; //Form id that provides Contact Form 7

  const [fullname, setFullname] = useState('') // store token
  const [email,   setEmail] = useState('') // store token
  const [subject,   setSubject] = useState('') // store token
  const [message,   setMessag] = useState('') // store token
  const [token, setToken] = useState('') // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
  const [messageSent, setMessageSent] = useState(false) // manage sent message state
  const [isSubmitting, setIsSubmitting] = useState(false) // manage sent message state

  // this effect function authenticates our subcriber user to get a token
  useEffect(() => {
    // console.log('aaaa');
    // getToken()



  }, [])



  const getToken = async () => {

    console.log('getToken');
    const settings = {
      method: 'POST',
      data: {
        username: 'mlafuente', // provide a user credential with subscriber role
        password: 'mario1072'
      },
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
  };
 

     try {
      console.log('111111')
      const fetchResponse = await fetch(`${WEBSITE_URL}/wp-json/jwt-auth/v1/token/validate`, settings);
      const data = await fetchResponse.json();
      console.log('222222');
      console.log(data);
      return data;
      } catch (e) {
          return e;
      }  
  
   };
   


  // use useFormik hook using object destructuring assignment to extract helpful methods
  // const {
  //   handleChange,
  //   isSubmitting,
  //   values,
  //   handleSubmit,
  // } = useFormik({
  //   initialValues: {
  //     fullname: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   },
  //   onSubmit: ({
  //     fullname,
  //     email,
  //     subject,
  //     message
  //   }, { setSubmitting, resetForm }) => {
  //     setSubmitting(true)
  //     // here we created a FormData field for each form field
  //     const bodyFormData = new FormData();
  //     bodyFormData.set('your-name', fullname);
  //     bodyFormData.set('your-email', email);
  //     bodyFormData.set('your-subject', subject);
  //     bodyFormData.set('your-message', message);
      
  //     // here we sent
  //     axios({
  //       method: 'post',
  //       url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
  //       data: bodyFormData,
  //       // headers: {
  //       //   'Authorization': `Bearer ${token}`,
  //       //   'Content-Type': 'multipart/form-data'
  //       // },
  //     }).then(response => {
       

  //       console.log(response.data.message);
  //       console.log(response.data.status);
    

  //       if(response.data.status === 404){
  //         console.log(`eeeerrrorr`);
  //       }else{
  //             // actions taken when submission goes OK
  //       resetForm()
  //       setSubmitting(false)
  //       setMessageSent(true)
  //       setIsSuccessMessage(true)

  //       const content = `<div><div class="box  ">
  //       <h2><strong>${response.data.message}</strong></h2>
  //       </div>
  //       <div class="box ">
  //       <img loading="lazy" class="alignnone size-full " src="../../marioGlasses.jpg">
  //       </div>
  //       </div>`
  //       document.getElementById('formbasic').innerHTML = content;
  //       }


  //     }).catch(error => {
  //       console.log(`eeeerrrorr2`);
  //       // actions taken when submission goes wrong
  //       setSubmitting(false)
  //       setMessageSent(true)
  //       setIsSuccessMessage(false)
  //     })
  //   },
  // })



  //When Submit Form
  function handleSubmit1(event){
    console.log(`11xxxxxxxxxxxxxx ${event}`);
    event.preventDefault()
    setIsSubmitting(true)
   
    const data = new FormData(event.target);
    console.log(`222xxxxxxxxxxxxxx ${fullname}`);
   //2 SET INFO TO SEND
   data.set('your-name', fullname);
   data.set('your-email', email);
   data.set('your-subject', subject);
   data.set('your-message', message);

   console.log(data);
   sendForm(data)
  
  }
 
 
  function sendForm(data) {
    //console.log('A form was submitted: ');

    fetch(`${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
    {
        body: data,
        method: "post"
    })
    .then(response => response.json())
    .then(data => {

      if(data.status === 404){
        console.log(`eeeerrrorr`);
      }else{
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
      document.getElementById('formbasic').innerHTML = content;
      }

      console.log(data)
    });



    // const form = document.getElementsByTagName('form')[0];
    // form.submit();
}

  


  useEffect(() => {
    // set timeout 3 seconds to remove error/success message.
    setTimeout(() => {
      // this will reset messageSent and isSuccessMessage state
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000);
    // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
  }, [isSuccessMessage, messageSent])




  return (
    <LayoutIndex>
    <div id="formbasic">

    <form onSubmit={handleSubmit1}>
      <fieldset>
        <div>
          <label htmlFor="fullname">fullname*</label>
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
        <input className ='btn' type="reset" value="Clear" />

      </div>
    </form>
    </div>
    </LayoutIndex>
  )
}

export default ContactForm