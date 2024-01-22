
// Make sure layout is empty.
let Sitemap = (props) => {
   return
}
Sitemap.layout = (page) => {
   return <div>{page}</div>
}

function generateSiteMap() {
   return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         <url><loc>https://www.jackhales.com/</loc></url>
      </urlset>
   `
}

export async function getServerSideProps({ res }) {
   // We generate the XML sitemap with the posts data
   const sitemap = generateSiteMap();

   res.setHeader('Content-Type', 'text/xml');
   // we send the XML to the browser
   res.write(sitemap);
   res.end();

   return { props: {}, }
}



export default Sitemap