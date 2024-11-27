import { Divider, Link } from "@nextui-org/react";
import classnames from "classnames";
import NextLink from "next/link";

function Header() {  
   return (
      <>
         <div className={classnames(
            "m-4 mt-6 rounded-xl text-center"
         )}>
            <div>
               <Link href="/" as={NextLink}>
                  <img
                     src="/jack-hales-picture-harbour.jpg"
                     width={150}
                     className={classnames("mx-auto rounded-full shadow-xl")}
                     alt="Jack Hales Picture"
                  />
               </Link>
            </div>
            <div>
               Jack Hales
            </div>
            <div className="opacity-75">
               <Link href="https://dataology.com.au" target="_dataology" as={NextLink}>Dataology</Link> <br />
            </div>
            <div className="opacity-75">
               <Link href="mailto:me@jackhales.com" as={NextLink} target="_emailMe">
                  me@jackhales.com
               </Link>
            </div>
            <Divider className="my-2 mt-3 w-12 mx-auto" />
            <div className="opacity-75 flex flex-wrap gap-3 justify-center">
               <Link href="/articles" as={NextLink}>Articles</Link>
               <Link href="/background-and-experience" as={NextLink}>Background & Experience</Link>
            </div>
         </div>
      </>
   )
}

export default Header
