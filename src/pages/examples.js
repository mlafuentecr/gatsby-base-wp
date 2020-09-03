import React from "react"
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
      console.log(`xxxx`);
      console.log( propsArray[item].slug );
       return <li key={key}>{ propsArray[item].slug }</li>
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
