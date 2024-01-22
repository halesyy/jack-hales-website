
import Button from "components/small/Button"
import classnames from "classnames"

let LongButton = (props) => {
    return (
        <Button {...props} className={classnames("w-full", props.className)} white>
            {props.children}
        </Button>
    )
}

export default LongButton