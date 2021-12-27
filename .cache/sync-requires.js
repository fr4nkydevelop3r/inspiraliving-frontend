
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/frank/Desktop/inspiral_website/frontend/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/frank/Desktop/inspiral_website/frontend/src/pages/blog.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/frank/Desktop/inspiral_website/frontend/src/templates/blogPost.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/frank/Desktop/inspiral_website/frontend/src/templates/page.js"))
}

