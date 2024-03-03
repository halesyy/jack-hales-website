import { Link } from "@nextui-org/react";
import classnames from "classnames";

const Header = ({ ...props }) => {  
   return (
      <>
         <div className={classnames(
            "m-4 mt-6 rounded-xl text-center"
         )}>
            <div className="">
               <Link href="/">
                  <img
                     src="/jack-hales-picture.jpg"
                     width={125}
                     className={classnames("mx-auto rounded-full shadow-xl")}
                  />
               </Link>
            </div>
            <div>
               Jack Hales
            </div>
            <div className="opacity-75">
               CTO of <Link href="https://dataology.com.au" target="_dataology" className="">Dataology</Link> <br />
            </div>
         </div>
      </>
   )
}

export default Header
