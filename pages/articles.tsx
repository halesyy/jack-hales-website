import { option } from "fp-ts";
import { MediumContainer, SmallContainer } from "components/medium/Container";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { getPost, listArticles } from "lib/articles";
import Head from "next/head";

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
         <Card className="w-full px-2 hover:scale-105" isPressable>
            <CardHeader className="text-xl block text-left">
               {article.title}
               <div className="text-gray-300 text-sm">
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
      <MediumContainer className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
         <Head>
            <title>Articles - Jack Hales</title>
         </Head>
         {articles.sort((a1, a2) => (
            a2.datetime.localeCompare(a1.datetime)
         )).map((article, i) => (
            <ArticlePreview article={article} />
         ))}
      </MediumContainer>
   )   
}