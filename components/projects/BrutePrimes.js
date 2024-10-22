import { Link, LinkIcon } from "@nextui-org/react"
import Title from "components/small/Title"
import NextLink from "next/link"

let BrutePrimes = (props) => {
   return (
      <div className="modal-content">
         {/* <Title className="mt-4">Brute-forcing Primes</Title> */}

         <p>
            I love mathematics, but I have no formal training beyond High-School. This has 
            been an advantage, and disadvantage.
         </p>

         <p>
            <strong className="underline">The advantage:</strong> The mathematics I was able
            to learn, was learnt in my "soul". Statistics, probability, percentages, rates of change,
            multivariate analysis, were all built up on my own from a programming perspective.
         </p>

         <p>
            <strong className="underline">The disadvantage:</strong> Many areas of mathematics
            I now find inspiring and of great use were not accessible in my earlier programming
            projects.
         </p>

         <p>
            My <a className="text-blue-600 underline" href="https://github.com/halesyy/brute-primes" target="_bruteGit">"brute-forcing primes"</a> project is an 
            example of this. I also wrote an <Link href="/article/prime-number-research-2022" className="text-2xl" as={NextLink}>article</Link> about it. 
         </p>

         <p>
            This project involves brute-forcing the creation of equations. It would randomly combine 
            the mathematical primitive characters (like sin, cos, +, -, (), etc), then attempt to 
            convert that into a functioning callable function.
         </p>
         
         <p>
            From there, it would input x values (in varying forms), and compare the difference to the
            prime number series. Different error calculations would be used to determine fitness of
            equations.
         </p>

         <p>
            This worked well! And created cool equations like:
            <ul className="ml-10 mt-5">
               <li>f(x) = x log(x, 7)</li>
            </ul>
         </p>

         <p>
            Where x is iterated by 2. Or the same as (x * 2) substituted.
         </p>

         <p>
            The problem was that the difference in the prime series and the plotted would always
            start to receive incremental errors. I'd then plot the difference as a chart, and get a
            positive exponential growth chart. That was as far as I got - and life got in the way.
         </p>

         <p>
            More to come... When I have more time!
         </p>
      </div>
   )
}

export default BrutePrimes