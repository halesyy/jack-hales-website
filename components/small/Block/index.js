
import { useState } from "react"
import classnames from "classnames"

const Block = ({className, expandable, ...props}) => {
   className = className? className: ""
   let includeDefaultBg = !className.includes("bg")
   let loading = expandable ? (loading || false) : false
   let [expanded, setExpanded] = useState(false)

   return (
      <div {...props} style={props.style || {}} className={classnames(
         "mt-4 p-6 font-body border text-lg rounded-md border-gray-200 shadow-xl",
         { "bg-gray-100": includeDefaultBg },
         { "!fixed !w-full !mt-0 !top-0 !left-0 !h-full": expanded },
         { "relative": !expanded },
         className,
      )}>
         {(expandable && !loading) ? (
            <div onClick={() => setExpanded(!expanded)} className="absolute top-0 mt-5 text-gray-400 rotate-45 hover:text-black cursor-pointer">
               {expanded ? (
                  <>&rarr;<span className="mr-0.5"></span>&larr;</>
               ) : (
                  <>&larr;<span className="mr-0.5"></span>&rarr;</>
               )}
            </div>
         ) : false}
         {props.children}
      </div>
   )
}

export default Block