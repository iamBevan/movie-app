import React from "react"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

interface RatingCircleProps {
	rating: number | undefined
}

const RatingCircle: React.FC<RatingCircleProps> = ({ rating }) => {
	return (
		<>
			<CircularProgressbar
				value={rating ? rating : 0}
				text={`${rating}%`}
				styles={{
					// Customize the root svg element
					root: {},
					// Customize the path, i.e. the "completed progress"
					path: {
						// Path color
						stroke: `rgba(9, 234, 13, ${rating ?? 0 / 100})`,
						// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
						strokeLinecap: "butt",
						// Customize transition animation
						transition: "stroke-dashoffset 0.5s ease 0s",
						// Rotate the path
						// transform: "rotate(0.25turn)",
						transformOrigin: "center center",
					},
					// Customize the circle behind the path, i.e. the "total progress"
					trail: {
						// Trail color
						stroke: "black",
						// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
						strokeLinecap: "butt",
						// Rotate the trail
						// transform: "rotate(0.25turn)",
						transformOrigin: "center center",
					},
					// Customize the text
					text: {
						// Text color
						fill: "white",
						// Text size
						fontSize: "28px",
					},
					// Customize background - only used when the `background` prop is true
					background: {
						fill: "#3e98c7",
					},
				}}
			/>
		</>
	)
}

export { RatingCircle }
