import React from "react"
import Layout from "../components/layoutNoFooter"
import SEO from "../components/seo"
import ContactFormBasic from "../components/form"
import Bounce from "react-reveal/Bounce"

export default function Pages(props) {

  return (
    <Layout nameType={'landingPg xx'} >
          <SEO title={`${props.pageContext.title}`} description={`${props.pageContext.excerpt}`}  />
      <div className="wrap">
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
