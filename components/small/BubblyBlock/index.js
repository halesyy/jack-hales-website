import classnames from "classnames"

let BubblyBlock = ({children, className, ...props}) => {
   return (
      <div className={classnames(
         // "bg-gray-100 text-black p-4 border-b border-gray-300",
         // "m-4 rounded-xl container",
         "container",
         className
      )}>
         {children}
      </div>
   )
}

export default BubblyBlock