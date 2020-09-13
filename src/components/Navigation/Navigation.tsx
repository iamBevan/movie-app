import React from "react"
import { Search } from "../Search/Search"
import styles from "./Navigation.module.scss"

const Navigation: React.FC = () => {
	return (
		<nav>
			<div className={styles.content}>
				<div className={styles.logo}>
					Movie<span>Lab</span>
				</div>
				<div className={styles.menu}>
					<div className={styles.movies}>Movies</div>
					<div className={styles.tv}>TV</div>
				</div>
				<div className={styles.search}>
					<Search />
				</div>
				<div className={styles.login}>
					<div className={styles.signIn}>Sign In</div>
					<div className={styles.signUp}>Sign Up</div>
				</div>
				<div className={styles.language}>
					<div>En</div>
				</div>
			</div>
		</nav>
	)
}

export { Navigation }
