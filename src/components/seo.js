
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, author }) =>{


  const site = useStaticQuery(graphql`
  query {
    allSite {
      nodes {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  }
  `)

  
  const {title: titleQuery, siteUrl: siteUrlQuery, description: descriptionQuery} =site.allSite.nodes[0].siteMetadata;
  const metaDescription = description || descriptionQuery
  const metaTitle =  title || titleQuery;

  // console.log(`******************`)
  // console.log(site)
  // console.log(titleQuery)
  
  return (
    <Helmet
      htmlAttributes={{ lang : 'en' }}
      title={metaTitle}
      titleTemplate={`%s  | ${titleQuery}`}
      defer={false}
      meta={[
        {
          'http-equiv': `Content-Security-Policy`,
          content: 'upgrade-insecure-requests',
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en-US',
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO