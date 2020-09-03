import React from "react"
import { Link } from "gatsby"
import LayoutIndex from "../components/layoutinternal"
import { useStaticQuery, graphql } from "gatsby"
import Bounce from 'react-reveal/Bounce';

const CategoryPage = props => {
  const queryCategoryPost  = useStaticQuery(graphql`
  {
    WP_1 {
      posts {
        nodes {
          slug
          categories {
            nodes {
              slug
            }
          }
          excerpt
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  
  }
`)


const posts = queryCategoryPost.WP_1.posts.nodes;

  const Content = props => {
    console.log(props);
    const propsArray =  props.posts;
    const result = Object.keys(propsArray).map((item, key) => { 
       return (
         <div className="postWrapper">
            <h2 key={key}>{ propsArray[item].title }</h2>
            <div className="thumb"><img src={ propsArray[item].featuredImage.node.sourceUrl} alt=""/></div>
           <div className="expert">{propsArray[item].excerpt}</div>
           <Link to={`../${propsArray[item].slug}`}>{ propsArray[item].slug }</Link>
         </div>
       
       )
    });

    return result
  

  }

  return (
    <LayoutIndex>
      <div className="div-center section color1">
        <div className="wrap">
          <div className="container mainText boxes4">
          <Bounce left>
            <Content posts={posts} />
            </Bounce>
          </div>
        </div>
      </div>

    </LayoutIndex>
  )
}

export default CategoryPage
