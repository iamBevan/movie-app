import React from 'react'
import { Search } from '../Search/Search'
import styles from './Header.module.scss'

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            {/* <div className={styles.name}>KMDb</div> */}
            <Search />
        </div>
    )
}

export { Header }
