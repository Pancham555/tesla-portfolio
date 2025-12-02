import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: "github",
    repo: `Pancham555/tesla-portfolio`
  },
  collections: {
    posts: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        isDraft:fields.checkbox({label:"Is Draft?"}),
        title: fields.slug({ name: { label: 'Title',validation:{isRequired:true} } }),
        snippet: fields.text({label:"Snippet",validation:{isRequired:true}}),
        pubDate:fields.date({label:"Date",defaultValue:`${new Date(Date.now())}`,validation:{isRequired:true}}),
        updatedDate: fields.date({label:"Updated Date"}),
        originalLink:fields.url({label:"Original Link"}),
        cover:fields.image({label:"Cover Image",directory:"public/articles", publicPath:"/articles/"}),
        category:fields.relationship({label:"Category",collection:"categories"}),
        content: fields.mdx({ label: 'Content' , 
          options: {
            image: {
              directory: 'public/articles',
              publicPath: '/articles/',
            },
          },}),
      },
    }),
    categories: collection({
        label: 'Categories',
        slugField: 'category',
        path: 'src/content/categories/*',
        schema: {category: fields.text({label:"Category"}),}
    })
  },
});
