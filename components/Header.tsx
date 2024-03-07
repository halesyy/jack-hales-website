import { Link } from "@nextui-org/react";
import classnames from "classnames";
import NextLink from "next/link";

const Header = ({ ...props }) => {  
   return (
      <>
         <div className={classnames(
            "m-4 mt-6 rounded-xl text-center"
         )}>
            <div className="">
               <Link href="/" as={NextLink}>
                  <img
                     src="/jack-hales-picture.jpg"
                     width={125}
                     className={classnames("mx-auto rounded-full shadow-xl")}
                     alt="Jack Hales Picture"
                  />
               </Link>
            </div>
            <div>
               Jack Hales
            </div>
            <div className="opacity-75">
               CTO of <Link href="https://dataology.com.au" target="_dataology" as={NextLink}>Dataology</Link> <br />
            </div>
            <div className="opacity-75">
               <Link href="/articles" as={NextLink}>Articles</Link>

            </div>
         </div>
      </>
   )
}

export default Header
