import React from "react"
import { SearchBar } from "./SearchBar"
import { action } from "@storybook/addon-actions"
import { withA11y } from "@storybook/addon-a11y"
import "../Search/Search.module.scss"

const data: JSX.Element[] = [
	<li>Test1</li>,
	<li>Test2</li>,
	<li>Test3</li>,
	<li>Test4</li>,
]

export const Basic = () => (
	<div style={{ margin: "50px 50px" }}>
		<SearchBar
			input='Test1'
			onChange={() => {}}
			onFocus={() => {}}
			dropDownList={data}
			isOpen={true}
			onSubmit={action("submit")}
			toggle={action("toggle")}
		/>
		Dog
	</div>
)

export const WithSuggestions = () => (
	<div style={{ margin: "50px 50px" }}>
		<SearchBar
			input='Test2'
			onChange={() => {}}
			onFocus={() => {}}
			dropDownList={data}
			isOpen={true}
			onSubmit={action("submit")}
			toggle={action("toggle")}
		/>
		Dog
	</div>
)

export default {
	title: "SearchBar",
	component: SearchBar,
	decorators: [withA11y],
}
