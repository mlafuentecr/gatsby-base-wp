import React from "react"
import Layout from "../components/layoutNoFooter"
import SEO from "../components/seo"
import ContactFormBasic from "../components/form"
import Bounce from "react-reveal/Bounce"

export default function Pages(props) {

  return (
    <Layout nameType={'landingPg '} >
          <SEO title={`${props.pageContext.title}`} description={`${props.pageContext.excerpt}`}  />
      <div className="wrap" style={{backgroundImage: `url(../bg-landing.jpg)`, backgroundPosition:`center top`}}>
        <div className="container mainText ">
        
        <Bounce bottom>
          <div className="ladingwrapper">
          <div
            className={`content ${props.pageContext.slug}`}
            pgname={props.pageContext.slug}
            dangerouslySetInnerHTML={{ __html: props.pageContext.content }}
          />
         
            <ContactFormBasic />
            </div>
          </Bounce>

        </div>
      </div>
    </Layout>
  )
}
