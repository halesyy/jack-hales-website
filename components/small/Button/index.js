
import classnames from "classnames"
import Link from "next/link"

let buttonBaseClasses = ({white}) => [
	{ "bg-white text-black hover:bg-purple hover:text-white border border-gray-400": white },
	{ "bg-purple text-white": !white },
	"hover:bg-blue-700 p-2 px-4 rounded shadow",
]

let linedButtonOverride = (lined) => {
	return [
		{"!bg-transparent !from-gray-100 !to-gray-100 !text-blue-800 !border-[3px] !border-blue-800": lined},
	]
}

const Button = (props) => {
	return (
		<button title={props.title || undefined} className={classnames(
			...buttonBaseClasses({white: props.white || false}),
			props.className
		)} onClick={props.onClick || (e => console.log("Clicked button."))}>
			{props.children}
		</button>
	)
}

export let AButton = ({href, title, children, className, white, lined}) => {
	let linedOverride = linedButtonOverride(lined)

	return (
		<a href={href} title={title} className={classnames(
			...buttonBaseClasses({white: white}),
			"!bg-gradient-to-br from-blue-700 to-blue-700 hover:!from-blue-600 hover:!to-blue-700 hover:!text-white",
			"cursor-pointer text-center flex justify-center items-center",
			linedOverride,
			className
		)}>
			{children}
		</a>
	)
}

export let Button3D = ({ green, lightGreen, darkBlue, className, children, disabled, href, ...props }) => {
	let color = "blue"
	if (green) color = "green"
	if (darkBlue) color = "darkBlue"
	if (lightGreen) color = "lightGreen"

	let buttonComponent = (
		<button
			{...props}
			className={classnames(
				"font-bold border-b-4  rounded",
				"py-2 px-4",
				{ "bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500 text-white": color === "blue" },
				{ "bg-green-600 hover:bg-green-700 border-green-700 hover:border-green-800 text-white": color === "green" },
				{ "bg-blue-800 hover:bg-blue-900 border-blue-900 hover:border-blue-900 text-white": color === "darkBlue" },
				{ "bg-green-400 hover:bg-green-500 border-green-500 hover:border-green-600 text-white": color === "lightGreen" },
				{ "opacity-50 pointer-events-none": disabled },
				className
			)}
		>
			{children}
		</button>
	)
	
	if (href) {
		return (
			<Link href={href}>
				{buttonComponent}
			</Link>
		)
	} else {
		return buttonComponent
	}
}

export let Button3DForDarkBackground = (props) => {
	return (
		<button
			{...props}
			className={classnames(
				"bg-blue-500 hover:bg-blue-600 rounded",
				"text-white font-bold",
				"border-b-4 border-blue-400 hover:border-blue-500",
				"py-2 px-4 shadow",
				props.className
			)}
		>
			{props.children}
		</button>
	)
}

export default Button