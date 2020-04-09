import React from 'react'
import styles from './ProfileCard.module.scss'
import { PopularResults } from '../../hooks/interfaces'

const ProfileCard: React.FC<PopularResults> = (props) => {
    return (
        <div className={styles['profile-card']}>
            <div
                style={{
                    // borderRadius: '50%',
                    overflow: 'hidden',
                    height: '100%',
                    width: '185px',
                }}
            >
                <img
                    style={{
                        width: '185px',
                    }}
                    src={
                        props.profile_path !== null
                            ? `https://image.tmdb.org/t/p/w500${props.profile_path}`
                            : `https://via.placeholder.com/500x750`
                    }
                    alt="poster"
                />
            </div>
            <h1>{props.name}</h1>
            <p>
                Popularity <span>{Math.round(props.popularity)}</span>
            </p>
        </div>
    )
}

export { ProfileCard }
