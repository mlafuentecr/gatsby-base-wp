import React from 'react'
import Layout from '../components/layoutinternal'
import SEO from '../components/seo'


export default function Pages(props) {
 

  return (
    <Layout>
      <SEO title={''} />
      
      <div
        className={`content ${props.pageContext.slug}`}
        pgname={props.pageContext.slug}
        onClick={handleChick}
        dangerouslySetInnerHTML={{ __html: props.pageContext.content }} 
      />
      <a id="scrollTop" onClick={()=>topFunction()} href="#header" className="top-link hide">▲</a>
  
    </Layout>
  )
}