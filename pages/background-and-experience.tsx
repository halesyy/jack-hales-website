import { Chip, Divider } from "@nextui-org/react";
import { SmallContainer } from "components/medium/Container";

function MostImpactfulBook() {
   return (
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl duration-300 p-6 my-4">
         <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <img
               src="/black-swan-book.jpg"
               alt="The Black Swan by Nassim Taleb"
               className="w-32 h-auto rounded-md shadow-sm mx-auto md:mx-0"
            />
            <div className="space-y-2 w-full">
               <h3 className="text-xl font-semibold text-center md:text-left">The Black Swan</h3>
               <p className="text-gray-600 text-sm pb-2 text-center md:text-left">by Nassim Nicholas Taleb</p>
               <div className="flex flex-wrap justify-center md:justify-start gap-2 my-2">
                  <Chip size="sm" variant="flat">Finance</Chip>
                  <Chip size="sm" variant="flat">Risk Analysis</Chip>
                  <Chip size="sm" variant="flat">Empiricism</Chip>
                  <Chip size="sm" variant="flat">Probability</Chip>
                  <Chip size="sm" variant="flat">Complex Systems</Chip>
                  <Chip size="sm" variant="flat">Decision Making</Chip>
                  <Chip size="sm" variant="flat">Statistics</Chip>
                  <Chip size="sm" variant="flat">Epistemology</Chip>
                  <Chip size="sm" variant="flat">Complexity Theory</Chip>
               </div>
               <p className="text-gray-700 leading-relaxed text-sm pt-2">
                  This is one of the first books I can recall reading which fundamentally changed my thinking, in almost every area of my thinking. Extreme events, remote incalculable probabilities, models, and the quadrants of randomness which exist in our world. It gave me a deeper respect for Italy when I visited, and challenged by assumptions on skill and its place in luck. On a technical level, it gave me a deeper understanding for fitting models, chaos theory and the issues there, exploring raw data (a personal joy of mine), where to apply gaussian distributions, and how to think about them. 
               </p>
               <p className="text-gray-700 leading-relaxed text-sm">
                  It's hard to quantiy just how much respect I have for this book, in conjunction with Fooled By Randomness, Skin In The Game, and I ironically have not yet read Antifragile - but plan to. I've read The Black Swan around 5 times in the last 4 years - every time is a deep joy with many new insights.
               </p>
            </div>
         </div>
      </div>
   );
}

function LanguageExposure() {
   return (
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl duration-300 p-6 my-4">
         <h3 className="text-xl font-semibold">Language Experience</h3>
         <p className="text-gray-600 text-sm pb-2">Primary languages and exposure</p>
         <div className="flex flex-wrap gap-2 my-2">
            <Chip size="sm" variant="flat">JavaScript</Chip>
            <Chip size="sm" variant="flat">TypeScript</Chip>
            <Chip size="sm" variant="flat">Python</Chip>
            <Chip size="sm" variant="flat">Rust</Chip>
            <Chip size="sm" variant="flat">Tailwind</Chip>
            <Chip size="sm" variant="flat">PHP</Chip>
            <Chip size="sm" variant="flat">SQL</Chip>
            <Chip size="sm" variant="flat">Bash</Chip>
            <Chip size="sm" variant="flat">CSS</Chip>
            <Chip size="sm" variant="flat">HTML</Chip>
         </div>
         <p className="text-gray-700 leading-relaxed text-sm pt-2">
            My primary development experience has been with JavaScript and Python, using them extensively in both professional and personal projects. I've recently spent about 2 weeks diving into Rust to understand its core concepts and memory safety principles. In my earlier development years, I worked significantly with PHP for web development projects.
         </p>
         <Divider className="my-4" />
         <h3 className="text-xl font-semibold mt-4">Framework & Infrastructure Experience</h3>
         <p className="text-gray-600 text-sm pb-2">Platforms, databases, and tools I've worked with</p>
         <div className="flex flex-wrap gap-2 my-2">
            <Chip size="sm" variant="flat">Next.js</Chip>
            <Chip size="sm" variant="flat">React</Chip>
            <Chip size="sm" variant="flat">Node.js</Chip>
            <Chip size="sm" variant="flat">Express</Chip>
            <Chip size="sm" variant="flat">MySQL</Chip>
            <Chip size="sm" variant="flat">MongoDB</Chip>
            <Chip size="sm" variant="flat">PostgreSQL</Chip>
            <Chip size="sm" variant="flat">Firebase</Chip>
            <Chip size="sm" variant="flat">AWS</Chip>
            <Chip size="sm" variant="flat">GCP</Chip>
            <Chip size="sm" variant="flat">Heroku</Chip>
            <Chip size="sm" variant="flat">Docker</Chip>
            <Chip size="sm" variant="flat">Flask</Chip>
            <Chip size="sm" variant="flat">FastAPI</Chip>
            {/* <Chip size="sm" variant="flat">Kubernetes</Chip> */}
            {/* <Chip size="sm" variant="flat">Redis</Chip> */}
            <Chip size="sm" variant="flat">Git</Chip>
            {/* <Chip size="sm" variant="flat">GitHub Actions</Chip> */}
         </div>
         <p className="text-gray-700 leading-relaxed text-sm pt-2">
            I have extensive experience with modern web frameworks and cloud platforms. I've built and deployed applications using Next.js and React, hosted on various cloud providers including AWS, GCP, and Heroku. I'm comfortable working with both SQL databases like MySQL and PostgreSQL, as well as NoSQL solutions like MongoDB and Firebase. I've also worked with containerization using Docker and orchestration with Kubernetes for larger-scale deployments.
         </p>
      </div>
   )
}

function PlatformIntegrations() {
   return (
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl duration-300 p-6 my-4">
         <h3 className="text-xl font-semibold">Platform Integrations</h3>
         <p className="text-gray-600 text-sm pb-2">
            I have extensive experience integrating various software platforms and APIs. Here are some examples:
         </p>
         <div className="flex flex-wrap items-center gap-2 my-2">
            <h4 className="text-lg font-semibold">Pharmacy:</h4>
            <Chip size="sm" variant="flat">Z (ZAPI)</Chip>
            <Chip size="sm" variant="flat">Minfos</Chip>
            <Chip size="sm" variant="flat">Fred Office</Chip>
            <Chip size="sm" variant="flat">Fred NXT</Chip>
            <Chip size="sm" variant="flat">Fred Plus</Chip>
            <Chip size="sm" variant="flat">Simple</Chip>
            <Chip size="sm" variant="flat">RxOne</Chip>
            <Chip size="sm" variant="flat">Surefire</Chip>
         </div>
         <div className="flex flex-wrap items-center gap-2 my-2">
            <h4 className="text-lg font-semibold">Logistics:</h4>
            <Chip size="sm" variant="flat">Logwin</Chip>
            <Chip size="sm" variant="flat">DPWorld</Chip>
            <Chip size="sm" variant="flat">CHR</Chip>
            <Chip size="sm" variant="flat">Rohlig</Chip>
         </div>
         <div className="flex flex-wrap items-center gap-2 my-2">
            <h4 className="text-lg font-semibold">E-Commerce & CRM:</h4>
            <Chip size="sm" variant="flat">Shopify</Chip>
            <Chip size="sm" variant="flat">Salesforce</Chip>
         </div>
         <p className="text-gray-700 leading-relaxed text-sm pt-2">
            My experience with these platforms has allowed me to seamlessly integrate various systems, ensuring smooth operations and enhanced functionality across different domains.
         </p>
      </div>
   );
}

function TradingAndBetting() {
   return (
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl duration-300 p-6 my-4">
         <h3 className="text-xl font-semibold">Trading and Betting Experience</h3>
         <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
               <h4 className="text-lg font-semibold">Betfair Project (2020)</h4>
               <p className="text-gray-600 text-sm pb-2">
                  In 2020, when I was 18 and still in high school, I discovered Betfair, a betting exchange. My friend devised a betting strategy involving live betting on favorable odds during races. I developed a Chrome extension to automate this strategy by extracting proxy data points from the page to estimate race length and execute trades. This worked for a while until I learned about APIs. I contacted Betfair, joined their partnership program, and received merchandise. I iterated on the project a few times.
               </p>
               <div className="flex flex-wrap gap-2 my-2">
                  <Chip size="sm" variant="flat">JavaScript</Chip>
                  <Chip size="sm" variant="flat">Chrome Extensions</Chip>
                  <Chip size="sm" variant="flat">Web Scraping</Chip>
                  <Chip size="sm" variant="flat">API Integration</Chip>
                  <Chip size="sm" variant="flat">Multivariate Problems</Chip>
               </div>
            </div>
            <div className="flex-1">
               <h4 className="text-lg font-semibold">Binance Arbitrage Project (2022, 2023)</h4>
               <p className="text-gray-600 text-sm pb-2">
                  I worked on multiple projects with Binance, including an N-dimensional arbitrage project. This involved calculating all possible trading graphs and executing trades with positive outcomes as market books updated. I optimized the project extensively, finding it a fun challenge. Built in both Python and Rust, there is still more work to be done in the future. There are a few interesting secrets that help with edge cases, and a tremendous amount of "edge-risk" from the market making side, as well as the modelling hitting reality.
               </p>
               <div className="flex flex-wrap gap-2 my-2">
                  <Chip size="sm" variant="flat">Python</Chip>
                  <Chip size="sm" variant="flat">Rust</Chip>
                  <Chip size="sm" variant="flat">Algorithm Optimization</Chip>
                  <Chip size="sm" variant="flat">Arbitrage</Chip>
                  <Chip size="sm" variant="flat">Financial Markets</Chip>
               </div>
            </div>
         </div>
      </div>
   );
}

function LargeProjects() {
   return (
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl duration-300 p-6 my-4">
         <h3 className="text-xl font-semibold">Large Projects</h3>
         <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
               <h4 className="text-lg font-semibold">Shreem (2024-Current)</h4>
               <a href="/shreem.png" target="_blank">
                  <img
                     src="/shreem.png"
                     alt="Shreem Web App Screenshot"
                     className="w-full h-auto rounded-md shadow my-2 !z-[100]"
                  />
               </a>
               <a href="https://www.shreem.au" target="_blank" rel="noopener noreferrer">
                  <Chip size="sm" className="cursor-pointer hover:opacity-80 mb-1" color="primary">https://www.shreem.au</Chip>
               </a>
               <p className="text-gray-600 text-sm pb-2">
                  Shreem is an Australian pharmacy marketplace aggregator that facilitates seamless connections between pharmacies and direct suppliers for purchase orders. It streamlines the procurement process, enhancing efficiency and accuracy in the supply chain.
               </p>
               <p className="text-gray-600 text-sm">
                  <span className="font-semibold">From a technical perspective,</span> I built this system from client wireframes, implementing a robust design system with waitlist functionality, dynamic pricing models, and multi-supplier cart conversions. The backend architecture handles complex supplier integrations, real-time stock synchronization, and seamless Stripe payment processing. The platform maintains high performance and reliability while managing concurrent transactions and supplier interactions.
               </p>
            </div>
            <div className="flex-1">
               <h4 className="text-lg font-semibold">Pharma Portal (2021-Current)</h4>
               <a href="/pharma-portal-dashboard.png" target="_blank">
                  <img
                     src="/pharma-portal-dashboard.png"
                     alt="Pharma Portal Web App Screenshot"
                     className="w-full h-auto rounded-md shadow my-2 !z-[100]"
                  />
               </a>
               <a href="https://www.pharmaportal.com.au" target="_blank" rel="noopener noreferrer">
                  <Chip size="sm" className="cursor-pointer hover:opacity-80 mb-1" color="primary">https://www.pharmaportal.com.au</Chip>
               </a>
               <p className="text-gray-600 text-sm pb-2">
                  Pharma Portal is a comprehensive pharmacy management and reporting system that integrates with all major POS and dispensing systems. It allows pharmacies to efficiently manage store operations, receive alerts on critical metrics, monitor staff activities, and access vital information such as dead stock, reorder needs, overstocked items, and negative stock levels.
               </p>
               <p className="text-gray-600 text-sm">
                  <span className="font-semibold">From a technical perspective,</span> I developed this system end-to-end, including the deployment pipeline, data extraction, and secure data transfer processes. The backend features data processing pipelines and report generation, while the frontend provides an intuitive interface for pharmacy staff to access and act on their data.
               </p>
            </div>
         </div>
      </div>
   );
}

function ReachOut() {
   return (
      <div className="p-6 my-4">
         <h3 className="text-xl font-semibold">Let's Connect!</h3>
         <div className="flex flex-col gap-4">
            <p className="text-gray-600 text-sm mt-1">
               I thrive on engaging conversations and collaborative problem-solving. Whether you're in fintech, healthcare, e-commerce, or any other industry, I'm always excited to tackle new challenges and create impactful solutions.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100 text-center">
               <p className="text-gray-700 text-sm font-medium">
                  Have an interesting project? Want to discuss technology? Or just fancy a chat about innovation?
               </p>
               <a 
                  href="mailto:me@jackhales.com"
                  className="inline-block mt-2"
               >
                  <Chip 
                     size="sm" 
                     className="cursor-pointer hover:opacity-80" 
                     color="primary"
                  >
                     me@jackhales.com
                  </Chip>
               </a>
            </div>
         </div>
      </div>
   );
}

function JackHalesSkillsheet() {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="max-w-3xl mx-auto">
            <MostImpactfulBook />
            <LanguageExposure />
            <PlatformIntegrations />
            <TradingAndBetting />
            <LargeProjects />
            <ReachOut />
         </div>
      </div>
   );
}

export default JackHalesSkillsheet;