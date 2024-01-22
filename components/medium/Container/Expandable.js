
import classnames from "classnames"
import DefaultStyle from "components/organisms/Reports/DefaultStyle"
import { useState } from "react"

let Expandable = ({expanded, title, children, className}) => {
   let [isExpanded, isSetExpanded] = useState(expanded || false)
   return (
      <DefaultStyle className={classnames(className, "!p-0")}>
         <div onClick={() => isSetExpanded(!isExpanded)} className={classnames(
            "p-3 text-xl rounded-tr rounded-tl text-gray-200 bg-gray-800 font-bold cursor-pointer flex",
            {"rounded": !isExpanded}
         )}>
            <div>{title}</div>
            <div className="flex-grow text-right">
               {isExpanded? "Close": "Open"}
            </div>
         </div>
         <div className={classnames({"hidden": !isExpanded}, "")}>
            {children}
         </div>
      </DefaultStyle>
   )
}

export default Expandable