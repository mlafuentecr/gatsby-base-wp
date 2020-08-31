import React from "react"
import Layout from "../components/layoutLanding"
import SEO from "../components/seo"
import ContactFormBasic from "../components/form"


export default function Pages(props) {

  return (
    <Layout>
      <SEO title={`${props.pageContext.title}`} />
      <div className="wrap">
        <div className="container mainText ">
         
          <div
            className={`content ${props.pageContext.slug}`}
            pgname={props.pageContext.slug}
            dangerouslySetInnerHTML={{ __html: props.pageContext.content }}
          />
            <ContactFormBasic />
        </div>
      </div>
    </Layout>
  )
}
