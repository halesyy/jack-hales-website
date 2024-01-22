import { websiteName } from "config/app"

let JoinPharmaPortal = (props) => {
   return (
      <>
         <h1>Join {websiteName}</h1>
         <a href="/login" className="!no-underline">
            <div className="bg-gradient-to-br from-green-400 to-green-500 hover:from-green-300 hover:to-green-500 hover:scale-110 p-4 rounded-md shadow-xl text-center">
               <div className="text-white">
                  <div className="text-2xl text-gray-200">
                     Not a {websiteName} member yet?
                  </div>
                  <div className="text-5xl font-bold -mt-4">
                     Join {websiteName}
                  </div>
               </div>
            </div>
         </a>
      </>
   )
}

export default JoinPharmaPortal