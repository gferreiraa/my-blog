import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"


const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            fields{
              slug
            }
            frontmatter {
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
              background
            }
            timeToRead
          }
        }
      }
    }   
  `)

  const postlist = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />

      { postlist.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: {
              slug
            },
          },
        }) => (
          <PostItem
            slug={slug}
            background= {background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
        )}
    </Layout>
  )
}

export default IndexPage
