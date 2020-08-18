import React, { useEffect, useState } from 'react'
import Layout from '../components/layoutinternal'

import SEO from '../components/seo'



export default function Pages(props) {
  return (
    <Layout>
      <SEO title={props.pageContext.slug} />
      <div
        className={`content ${props.pageContext.slug}`}
        pgname={props.pageContext.slug}
        dangerouslySetInnerHTML={{ __html: props.pageContext.content }} 
      />
      
    </Layout>
  )
}