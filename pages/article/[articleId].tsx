import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Option, none, some } from "fp-ts/lib/Option";
import { serialize } from "next-mdx-remote/serialize";
import { option } from "fp-ts";
import { MDXRemote } from "next-mdx-remote";
import { SmallContainer } from "components/medium/Container";

type PostResponse = {
   data: {[key: string]: any},
   content: string
};

/**
 * Returns a post's matter parse from the article ID.
 * Must be in the POSTS const.
 * @param articleId
 */
function getPost(articleId: string): Option<PostResponse> {
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
function listArticles(): string[] {
   const files = fs.readdirSync(path.join("articles"));

   const articles = files.map((filename) => {
      const slug = filename.replace(".mdx", "");
      return slug
   });

   return articles;
}

/**
 * Returns the paths which can be statically rendered.
 */
export async function getStaticPaths() {
   const paths = listArticles().map((articleId) => ({
      params: { articleId }
   }));

   console.log(paths);

   return {
      paths,
      fallback: false
   };
}

/**
 * Here, we build the props for the given articleId.
 * @returns 
 */
export async function getStaticProps({ params }) {
   console.log(params);
   const post = getPost(params.articleId);
   console.log(post);
   if (option.isSome(post)) {
      const { data, content } = option.toNullable(post);
      const mdxForClient = await serialize(content);
      return {
         props: {
            data,
            content: mdxForClient
         }
      };
   } else {
      return { notFound: true };
   }
}

export default function ArticlePage({ data, content }): React.ReactNode {
   return (
      <SmallContainer>
         <h1>{data.title}</h1>
         <p>{data.date}</p>
         <div>
            <MDXRemote {...content} components={{
               Test: () => <div>Test</div>
            }} />
         </div>
      </SmallContainer>
   )
}
