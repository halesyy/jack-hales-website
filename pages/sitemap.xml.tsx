// import { listArticles } from "lib/articles";

const ARTICLE_IDS: string[] = [ 
   "prime-number-research-2022",
   "prime-number-research-2024",
   "software-topology",
   "ai-agents",
   "ai-agents-research-2024",
   "large-language-model-tool-design-functional-or-oop",
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
         <url><loc>https://www.jackhales.com/machine-learning</loc></url>
         <url><loc>https://www.jackhales.com/articles</loc></url>
         <url><loc>https://www.jackhales.com/background-and-experience</loc></url>
         <url><loc>https://www.jackhales.com/software-engineers-guide-exploring-oman-top-travel-tips-itinerary</loc></url>
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