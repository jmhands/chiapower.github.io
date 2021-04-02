import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";

import { mdxComponents } from "../components/mdxComponents";

const contentDirectory = path.join(process.cwd(), "content");
const mdx_file_extention = ".mdx";

function loadContentData(id: string) {
  const fullPath = path.join(contentDirectory, id + mdx_file_extention);

  // get MDX metadata and content
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // get metadata, content
  const { data, content } = matter(fileContents);

  let metadata = data;
  metadata["id"] = id;

  return { metadata, content };
}

export async function getContent(id: string) {
  const indexData = loadContentData(id);
  const mdxSource = await renderToString(indexData.content, {
    components: mdxComponents,
  });

  return {
    metadata: indexData.metadata,
    mdxSource,
  };
}
