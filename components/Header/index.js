import classnames from "classnames";
import Link from "next/link";

const Header = ({ ...props }) => {  
   return (
      <>
         <div className={classnames(
            "m-4 mt-6 rounded-xl"
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
            <div className="flex-grow"></div>
            <div className="lg:_flex-grow text-center">
               Jack Hales
            </div>
         </div>
      </>
   )
}

export default Header
