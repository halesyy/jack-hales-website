
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

/**
 * The goal is to render an element which will look nice
 * when centered with text and an "i" icon. When hovering over it,
 * it will be a tooltip to view the information provided.
 * `description` can be text, or a React component to be rendered.
 */
let InfoTooltip = ({id, description}) => {
   return (
      <>
         <div className="relative inline-block -top-1 -left-0" data-tooltip-id={id}>
            <svg className="w-4 h-4 text-gray-300 hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
            </svg>
         </div>
         <Tooltip id={id} multiline={true} className="tooltip">
            {description}
         </Tooltip>
      </>
   )
}

export default InfoTooltip