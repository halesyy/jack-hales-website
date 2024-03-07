
function siteMap() {
   return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         <url><loc>https://www.jackhales.com/</loc></url>
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