import React from "react"
import Layout from "../components/layoutinternal"
import SEO from "../components/seo"
import Bounce from "react-reveal/Bounce"

export default function post(props) {

  const content = () => { return { __html: props.pageContext.content }; };

  return (
    <Layout nameType={'post'} >
      {/* viene de gatsby-node */}
    <SEO title={`${props.pageContext.title}`} description={`${props.pageContext.excerpt}`}  />
    <div className="wrap">
      <div className="container mainText">
        <Bounce bottom>
          <div className={`content ${props.pageContext.slug}`} dangerouslySetInnerHTML={content()} />
        </Bounce>
      </div>
    </div>
  </Layout>
  )
}
