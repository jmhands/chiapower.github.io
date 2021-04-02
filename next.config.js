const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  target: "serverless",
  basePath: process.env.BASE_PATH || "",
  assetPrefix: process.env.BASE_PATH || "",
});
