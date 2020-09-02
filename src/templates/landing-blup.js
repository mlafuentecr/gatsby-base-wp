import React from "react"
import Layout from "../components/layoutLanding"
import SEO from "../components/seo"
import ContactFormBasic from "../components/form"
import Bounce from "react-reveal/Bounce"

export default function Pages(props) {

  return (
    <Layout nameType={'landing'} >
      <SEO title={`${props.pageContext.title}`} />
      <div className="wrap">
        <div className="container mainText ">
        <Bounce bottom>
          <div
            className={`content ${props.pageContext.slug}`}
            pgname={props.pageContext.slug}
            dangerouslySetInnerHTML={{ __html: props.pageContext.content }}
          />
            <ContactFormBasic />

            </Bounce>

        </div>
      </div>
    </Layout>
  )
}
