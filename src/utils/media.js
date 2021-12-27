export function getStrapiMedia(url) {
  if (url == null) {
    return null
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${
    process.env.GATSBY_STRAPI_URL || "https://strapi-4jqq.onrender.com"
  }${url}`
}
