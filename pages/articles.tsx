import { option } from "fp-ts";
import { getPost, listArticles } from "./article/[articleId]";

// TODO Make an article type for fields.

export async function getStaticProps() {
   const articleIds = listArticles();
   const articles = articleIds.map((articleId) => {
      const post = option.toNullable(getPost(articleId));
      return {
         article: {
            id: articleId,
            title: post.data.title,
            description: post.data?.description || "",
            date: post.data.date
         }
      }
   })

   return {
      props: { articles }
   };
}

export default function Articles({ articles, ...props }): React.ReactNode {
   return (
      <div>
         {/* {JSON.stringify(articles, null, "\t")} */}
      </div>
   )   
}