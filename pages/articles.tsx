import { option } from "fp-ts";
import { SmallContainer } from "components/medium/Container";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { getPost, listArticles } from "lib/articles";

// TODO Make an article type for fields.

type Article = {
   id: string,
   title: string,
   description: string,
   date: string,
   datetime: string // datetime.toJSON()
};

export async function getStaticProps() {
   const articleIds = listArticles();
   const articles: Article[] = articleIds.map((articleId) => {
      const post = option.toNullable(getPost(articleId));
      return {
         id: articleId,
         title: post.data.title,
         description: post.data?.description || "",
         date: post.data.date,
         datetime: new Date(post.data.date).toJSON()
      }
   })

   return {
      props: { articles }
   };
}

/**
 * Returns a preview of an article which is clickable.
 */
function ArticlePreview({ article }: Readonly<{
   article: Article
}>): React.ReactNode {
   return (
      <Link href={`/article/${article.id}`}>
         <Card className="w-full" isPressable>
            <CardHeader className="text-xl">
               {article.title}
               <div className="text-gray-300 text-sm flex-grow text-right">
                  {article.date}
               </div>
            </CardHeader>
            {article.description? (
               <CardBody className="text-gray-400">
                  {article.description}
               </CardBody>
            ): false}
         </Card>
      </Link>
   )
}

export default function Articles({ articles, ...props }: Readonly<{
   articles: Article[]
}>): React.ReactNode {
   return (
      <SmallContainer className="mt-8">
         {articles.sort((a1, a2) => (
            a2.datetime.localeCompare(a1.datetime)
         )).map((article, i) => (
            <ArticlePreview article={article} />
         ))}
      </SmallContainer>
   )   
}