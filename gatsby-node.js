exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //por cada pagina y post WP_
  const result = await graphql(`
  {
    WP_1 {
      pages(first: 800) {
        nodes {
          title(format: RENDERED)
          slug
          content(format: RENDERED)
        }
      }
      posts(first: 800) {
        nodes {
          title(format: RENDERED)
          slug
          content(format: RENDERED)
        }
      }
    }
  }
  
  `)


  
  
  result.data.WP_1.pages.nodes.forEach(function (node) {

        createPage({
      path: node.slug,
      component: require.resolve(`./src/templates/page.js`),
      context: {
        slug: node.slug,
        id: node.id,
        title: node.title,
        content: node.content,
      },
    })

});

result.data.WP_1.posts.nodes.forEach(function (node) {

  createPage({
path: node.slug,
component: require.resolve(`./src/templates/post.js`),
context: {
  slug: node.slug,
  id: node.id,
  title: node.title,
  content: node.content,
},
})

});

  // console.log(JSON.stringify(result, null, 4))
}
