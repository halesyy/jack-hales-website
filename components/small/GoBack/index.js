
import classnames from "classnames"
import { useRouter } from "next/router"

let GoBack = (props) => {
   let router = useRouter()

   // Move back to the prop-provided link if provided, else router.back()
   let moveBack = () => {
      if (props.to) {
         window.location.href = props.to
      } else {
         router.back()
      }
   }

   // Render the component.
   return (
      <div className={classnames("mt-4", props.className)}>
         <a onClick={() => moveBack()} className="text-blue-400 cursor-pointer">
            &larr; {props.children || "Back"}
         </a>
      </div>
   )
}

export default GoBack