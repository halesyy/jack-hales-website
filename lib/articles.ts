import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Option, none, some } from "fp-ts/lib/Option";

type PostResponse = {
   data: {[key: string]: any},
   content: string
};

/**
 * Returns a post's matter parse from the article ID.
 * Must be in the POSTS const.
 * @param articleId
 */
export function getPost(articleId: string): Option<PostResponse> {
   if (!(listArticles().includes(articleId))) {
      return none;
   }

   // Read the file content from the article.
   const fileContent = fs.readFileSync(path.join(
      `articles/${articleId}.mdx`
   ), "utf8");
   const { data, content } = matter(fileContent);

   return some({ data, content });
}

/**
 * Returns a list of the string paths for articles which exist.
 * @returns {string[]}
 */
export function listArticles(): string[] {
   const files = fs.readdirSync(path.join("articles"));

   const articles = files.map((filename) => {
      const slug = filename.replace(".mdx", "");
      return slug
   });

   return articles;
}