import { listArticles } from "lib/articles";

const ARTICLE_IDS: string[] = [ 
   "prime-number-research",
   "software-topology"
];

function siteMap() {
   // All articles.
   // const articleIds = listArticles();
   const articleSitemaps = ARTICLE_IDS.map((articleId) => (
      `<url><loc>https://www.jackhales.com/article/${articleId}</loc></url>`
   ));   
   return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         <url><loc>https://www.jackhales.com/</loc></url>
         <url><loc>https://www.jackhales.com/articles</loc></url>
         ${articleSitemaps.join("\n")}
      </urlset>
   `;
}

export async function getServerSideProps({ res }) {
   const sitemap = siteMap();
   res.setHeader('Content-Type', 'text/xml');
   res.write(sitemap);
   res.end();
   return { props: {}, };
}

// Build fake component to satisfy page generator.
let Sitemap = () => { return; }
export default Sitemap;