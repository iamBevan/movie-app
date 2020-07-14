import React, { useRef } from "react"
import styles from "./SearchBar.module.scss"
import { useClickAway } from "react-use"

interface Props {
	input: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
	isOpen: boolean
	onSubmit: any
	dropDownList: JSX.Element[] | undefined
	toggle: () => void
}

const SearchBar: React.FC<Props> = ({
	input,
	onChange,
	onFocus,
	onSubmit,
	isOpen,
	dropDownList,
	toggle,
}) => {
	const ref = useRef(null)

	useClickAway(ref, () => {
		toggle()
	})

	return (
		<form onSubmit={onSubmit}>
			<div className={styles.basicSearch}>
				<div className={styles.inputField}></div>
				<input
					className={styles.input}
					id='search'
					type='text'
					placeholder='Search...'
					value={input}
					onChange={onChange}
					autoComplete='off'
					onFocus={onFocus}
				/>
			</div>
			<ul ref={ref}>{isOpen && dropDownList}</ul>
		</form>
	)
}

export { SearchBar }
