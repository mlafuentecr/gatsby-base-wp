import React from "react"
import Layout from "../components/layoutinternal"
import SEO from "../components/seo"
import Bounce from "react-reveal/Bounce"

export default function Pages(props) {
  return (
    <Layout nameType={`page ${props.pageContext.slug}`} >
      <SEO title={`${props.pageContext.title}`} />

      <div className="wrap">
        <div className="container mainText">
          <Bounce bottom>
            <div
              className={`content ${props.pageContext.slug}`}
              pgname={props.pageContext.slug}
              dangerouslySetInnerHTML={{ __html: props.pageContext.content }}
            />
          </Bounce>
        </div>
      </div>
    </Layout>
  )
}
