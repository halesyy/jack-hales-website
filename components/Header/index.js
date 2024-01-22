import classnames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"

const Header = (props) => {  
   let router = useRouter()

   return (
      <>
         <div className={classnames(
            "flex flex-col lg:flex-row items-center bg-gray-100 text-black p-4 text-2xl border-b border-gray-300",
            "m-4 rounded-xl"
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
