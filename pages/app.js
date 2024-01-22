import Title from "components/small/Title"
import WideContainer from "components/medium/Container"
import UserContext from "contexts/user"
import { useContext } from "react"
import Tile from "components/medium/LandingSelectors/Tile"
import Head from "next/head"
import { websiteName } from "config/app"
import classnames from "classnames"

/**
 * Creates a green inline blocked banner which indicates that a tile
 * provides additional revenue potential to the pharmacy.
 * @param {*} props 
 * @returns {JSX.Element}
 */
let AdditionalRevenue = (props) => (
   <div className="inline-block py-1 px-2 rounded-lg shadow-lg text-sm bg-green-400 text-white">Additional Revenue</div>
)



export let TileImage = ({ imageUrl, text }) => {
   return (
      <div className="flex flex-col items-center justify-center">
         <div className="w-[75px] lg:w-2/3">
            <img src={imageUrl} alt={text} className={classnames(
               "text-sm w-full scale-125",
               "lg:translate-x-0",
               "lg:group-hover:opacity-0",
            )} />
         </div>
         <div className={classnames(
            "w-2/3 lg:w-full text-center",
            "text-lg lg:text-2xl font-bold mb-w",
            "transition duration-300",

            "lg:group-hover:translate-y-[-3.75rem]",
            "lg:group-hover:translate-x-0",

            // group-hover:translate-x-[5rem]
         )}>{text}</div>
      </div>
   )
}

/**
 * The page for /app, meant to compose a lot of features
 * to build a dynamic interface for all logged in users.
 * @param {*} props 
 * @returns {JSX.Element}
 */
let AppPage = (props) => {
   let { userDataLoading, uid, userData, clientSettings, loggedIn } = useContext(UserContext)

   // Send user to the landing page if they are not logged in, and window is provided.
   if (userDataLoading === false && loggedIn === false && typeof window !== undefined) {
      window.location.href = "/"
   }

   return (
      <>
         <Head>
            <title>App - {websiteName}</title>
         </Head>
         <WideContainer className="mt-12">
            <div className="bg-[rgba(255,255,255,0.3)] p-8 rounded-xl">
               <Title className="mt-0">Salesforce</Title>
               <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
                  <Tile text="Graph Navigator" href="#" loggedIn />
                  <Tile text="Data Explorer" href="#" loggedIn />
                  <Tile text="License Optimisation" href="#" loggedIn />
               </div>
            </div>
         </WideContainer>
      </>
   )
}

export default AppPage