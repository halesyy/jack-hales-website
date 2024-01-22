
import { SmallContainer } from "components/medium/Container"
import { serialize } from "next-mdx-remote/serialize"
import fs from "fs";
import path from "path";
import classnames from "classnames"

import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import Block from "components/small/Block";
import Head from "next/head";

// Custom components to be used.
import JoinPharmaPortal from "components/wiki/ctas/JoinPharmaPortal";
import RegisterInterestOpenForm from "components/marketing/RegisterInterest";
import { websiteName } from "config/app";

const getPost = (slug) => {
   const fileContents = fs.readFileSync(path.join(`wiki/articles/${slug}.mdx`), "utf8");
   const { data, content } = matter(fileContents);
   return {
      data,
      content,
   };
};

export const getStaticPaths = async () => {
   const files = fs.readdirSync(path.join("wiki/articles"))

   const articles = files.map((fileName) => {
      const slug = fileName.replace(".mdx", "")
      const fileContents = fs.readFileSync(
         path.join(`wiki/articles/${slug}.mdx`),
         "utf8"
      )
      const { data } = matter(fileContents);
      return {
         slug,
         data,
      }
   })

   const paths = articles.map((post) => ({ params: { slug: post.slug } }));

   return {
      paths,
      fallback: false,
   }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const mdxSource = await serialize(post.content)
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  }
}

//   @apply bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent;


let WikiPage = ({data, content}) => {
   let description = data.description
   return (
      <SmallContainer>
         <Head>
            <title>{data.title}</title>
         </Head>
         <Block>
            <div className={classnames(
               "text-6xl font-bold my-12 py-4",
               "bg-gradient-to-br from-blue-800 to-blue-500 bg-clip-text text-transparent"
            )}>{data.title}</div>
            {description?(
               <div className="text-gray-500 text-xl -mt-4 mb-4">{description}</div>
            ): false}
            <div className="text-gray-500 font-bold text-xl">{websiteName} Wiki</div>
            <hr className="my-4 mt-5" />
            <time className="text-gray-400">{data.date}</time>
         </Block>
         <Block>
            <div className="styled-markdown">
               <MDXRemote {...content} components={{
                  JoinPharmaPortal,
                  RegisterInterestOpenForm
               }} />
            </div>
         </Block>
      </SmallContainer>
   )
}

export default WikiPage