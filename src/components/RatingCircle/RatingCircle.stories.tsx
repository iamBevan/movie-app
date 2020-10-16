import React from "react"
import { RatingCircle } from "./RatingCircle"

export default {
	title: "RatingCircle",
	component: RatingCircle,
}

export const Default = () => (
	<div style={{ width: "150px", height: "50px" }}>
		<RatingCircle rating={50} />
	</div>
)
