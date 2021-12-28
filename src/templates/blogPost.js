import React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/layout"
import SEO from "@/components/seo"

const BlogPost = ({ data, pageContext }) => {
  const {
    slug,
    title,
    description,
    content,
    localizations,
  } = data.strapiArticle
  const global = data.strapiGlobal

  console.log(global)

  const metadata = {
    metaDescription: "This is our Blog",
    metaTitle: "Blog/InspiraLiving",
  }

  return (
    <>
      <SEO seo={metadata} global={global} />
      <Layout global={global} pageContext={{ ...pageContext, localizations }}>
        {title}
        {description}
        {content}
      </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
  fragment GlobalData on StrapiGlobal {
    favicon {
      localFile {
        publicURL
      }
    }
    footer {
      id
      columns {
        id
        links {
          id
          newTab
          text
          url
        }
        title
      }
      id
      logo {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      smallText
    }
    id
    metaTitleSuffix
    metadata {
      metaDescription
      metaTitle
      shareImage {
        localFile {
          publicURL
        }
      }
    }
    navbar {
      button {
        id
        newTab
        text
        type
        url
      }
      id
      links {
        url
        text
        newTab
        id
      }
      logo {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    notificationBanner {
      id
      text
      type
    }
  }

  query DynamicArticleQuery($id: String!, $locale: String!) {
    strapiGlobal(locale: { eq: $locale }) {
      ...GlobalData
    }
    strapiArticle(id: { eq: $id }) {
      slug
      title
      description
      content
      localizations {
        id
        locale
      }
    }
  }
`
