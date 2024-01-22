
import classnames from "classnames"

export let WideContainer = ({className, style, children, ...props}) => {
	return (
		<div className={classnames(
			"mx-0 xl:px-20 lg:px-10 md:px-10 sm:px-0 px-0 p-0",
			className
		)} style={style || {}}>
			{children}
		</div>
	)
}

export let SmallContainer = (props) => {
	return (
		<div className={classnames(
			"mx-0 md:container md:mx-auto lg:px-32 md:px-6 sm:px-20 px-0 p-0 mb-12",
			props.className
		)} style={props.style || {}}>
			{props.children}
		</div>
	)
}

// let Container = (props) => {
// 	return (
// 		<div className={classnames(
// 			"mx-0 md:container md:mx-auto lg:px-32 md:px-6 sm:px-20 px-0 p-0 mb-12",
// 			props.className
// 		)} style={props.style || {}}>
// 			{props.children}
// 		</div>
// 	)
// }

export default WideContainer // using wide container as the def at the moment