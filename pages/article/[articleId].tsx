
import { serialize } from "next-mdx-remote/serialize";
import { option } from "fp-ts";
import { MDXRemote } from "next-mdx-remote";
import { MediumContainer } from "components/medium/Container";
import { getPost, listArticles } from "lib/articles";
import { Divider } from "@nextui-org/react";
import classNames from "classnames";
import Head from "next/head";
import remarkGfm from "remark-gfm";

/**
 * Returns the paths which can be statically rendered.
 */
export async function getStaticPaths() {
   const paths = listArticles().map((articleId) => ({
      params: { articleId }
   }));

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
   const post = getPost(params.articleId);
   if (option.isSome(post)) {
      const { data, content } = option.toNullable(post);
      const mdxForClient = await serialize(content, {
         mdxOptions: {
            remarkPlugins: [remarkGfm]
         }
      });
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

function headerComponent(size: number): ({
   children
}: Readonly<{
   children: React.ReactNode 
}>) => React.ReactNode {
   let textSize: string;
   switch (size) {
      case 1:
         textSize = "text-4xl";
         break;
      case 2:
         textSize = "text-3xl";
         break;
      case 3:
         textSize = "text-2xl";
         break;
      case 4:
         textSize = "text-xl";
         break;
      case 5:
         textSize = "text-lg";
         break;
      case 6:
         textSize = "text-base";
         break;
      default:
         textSize = "text-3xl";
         break;
   }
   
   return ({children}) => (
      <div className={classNames(textSize, "font-bold")}>
         {children}
      </div>
   )
}

export default function ArticlePage({ data, content }): React.ReactNode {
   return (
      <MediumContainer>
         <Head>
            <title>{`${data.title} - Jack Hales`}</title>
            <meta name="description" content={data.description} />
            <meta property="og:title" content={`${data.title} - Jack Hales`} />
            <meta property="og:description" content={data.description} />
         </Head>
         <Divider className="my-8 bg-gray-200/50" />
         <div className="text-blue-100 px-2 hover:text-blue-300 cursor-pointer mt-4" onClick={() => {
            window.history.back();
         }}>
            &larr; Back
         </div>
         <div className={classNames(
            "text-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100",
            "rounded-2xl shadow-xl mt-4"
         )}>
            <div className="w-ful p-12 space-y-4">
               <div className="text-3xl">
                  {data.title}
               </div>
               {data.description && (
                  <div className="text-foreground/70">
                     {data.description}
                  </div>
               )}
               <div className="text-foreground/70">
                  By Jack Hales | {data.date}
               </div>
            </div>
         </div>
         <div className="mdx-content px-2 pt-8">
            <MDXRemote 
               {...content} 
               components={{
                  p: ({ children }) => (
                     <div className="my-6 text-lg text-justify">
                        {children}
                     </div>
                  ),
                  h1: headerComponent(1),
                  h2: headerComponent(2),
                  h3: headerComponent(3),
                  h4: headerComponent(4),
                  ul: ({ children }) => (<ul className="list-disc list-inside">{children}</ul>),
                  li: ({ children }) => (<li className="text-xl">{children}</li>),
                  strong: ({ children }) => (<strong>{children}</strong>)
               }} 
            />
         </div>
      </MediumContainer>
   )
}
