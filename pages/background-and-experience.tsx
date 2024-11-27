import { Chip, Divider } from "@nextui-org/react";
import { SmallContainer } from "components/medium/Container";

function MostImpactfulBook() {
   return (
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl duration-300 p-6 my-4">
         <div className="flex items-center gap-5">
            <img
               src="/black-swan-book.jpg"
               alt="The Black Swan by Nassim Taleb"
               className="w-32 h-auto rounded-md shadow-sm"
            />
            <div className="space-y-2">
               <h3 className="text-xl font-semibold">The Black Swan</h3>
               <p className="text-gray-600 text-sm pb-2">by Nassim Nicholas Taleb</p>
               <div className="flex flex-wrap gap-2 my-2">
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
         <div className="flex flex-wrap gap-2 my-2">
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
         <div className="flex flex-wrap gap-2 my-2">
            <h4 className="text-lg font-semibold">Logistics:</h4>
            <Chip size="sm" variant="flat">Logwin</Chip>
            <Chip size="sm" variant="flat">DPWorld</Chip>
         </div>
         <div className="flex flex-wrap gap-2 my-2">
            <h4 className="text-lg font-semibold">Other:</h4>
            <Chip size="sm" variant="flat">Shopify</Chip>
            <Chip size="sm" variant="flat">Salesforce</Chip>
         </div>
         <p className="text-gray-700 leading-relaxed text-sm pt-2">
            My experience with these platforms has allowed me to seamlessly integrate various systems, ensuring smooth operations and enhanced functionality across different domains.
         </p>
      </div>
   );
}

// function TradingAndBetting() {
//    return (

//    )
// }

function JackHalesSkillsheet() {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="max-w-3xl mx-auto">
            <MostImpactfulBook />
            <LanguageExposure />
            <PlatformIntegrations />
         </div>
      </div>
   );
}

export default JackHalesSkillsheet;