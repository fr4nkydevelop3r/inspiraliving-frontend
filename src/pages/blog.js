import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlesComponent from "../components/articles"
import "../styles/global.css"

const Blog = () => {
  const data = useStaticQuery(query)
  const {
    strapiGlobal,
    site: {
      siteMetadata: {
        languages: { locales, defaultLocale },
      },
    },
  } = data
  return (
    <>
      <SEO seo={{ title: "404: Not found" }} global={strapiGlobal} />

      <Layout
        pageContext={{
          locale: defaultLocale,
          locales,
          defaultLocale,
          slug: "blog",
        }}
        global={strapiGlobal}
      >
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      </Layout>
    </>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        languages {
          locales
          defaultLocale
        }
      }
    }
    strapiGlobal {
      ...GlobalData
    }
    allStrapiArticle {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          writer {
            name
          }
        }
      }
    }
  }
`

export default Blog
