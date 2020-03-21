import React from 'react'
import { Search } from '../Search/Search'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <Search />
        </div>
    )
}

export { Header }
