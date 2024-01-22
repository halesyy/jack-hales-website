
import classnames from "classnames"

let Title = ({className, children}) => {
    return (
        <div className={classnames("text-3xl my-8 text-center lg:text-left", className)}>
            {children}
        </div>
    )
}

export default Title