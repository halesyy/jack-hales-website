
import classnames from "classnames"

export default function Box(props) {

   return (
      <div className={classnames(
         "border border-gray-300 bg-gray-100 shadow", 
         props.className
      )}>
         {props.children}
      </div>
   )

}
