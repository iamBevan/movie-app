import React from 'react'
import styles from './Popular.module.scss'
import { MovieCard } from '../MovieCard/MovieCard'
import { usePopular } from '../../hooks/People/usePopular'
import { PopularResults, Popular } from '../../hooks/interfaces'
import { ProfileCard } from '../ProfileCard/ProfileCard'

const PopularList = () => {
    const popular = usePopular()

    const createPopularList = () => {
        const popularList: PopularResults[] = []
        if (popular?.results !== undefined) {
            for (let i: number = 0; i < 6; i++) {
                popularList.push(popular?.results[i])
            }
        }
        return popularList
    }

    return (
        <div className={styles['popular']}>
            <h1>Popular</h1>
            <div className={styles['grid']}>
                {createPopularList().map((el: PopularResults) => (
                    <ProfileCard
                        name={el.name}
                        profile_path={el.profile_path}
                        key={el.id}
                        adult
                        id={el.id}
                        known_for={el.known_for}
                        popularity={el.popularity}
                    />
                ))}
                {console.log(createPopularList()[0]?.known_for)}
            </div>
        </div>
    )
}

export { PopularList }
