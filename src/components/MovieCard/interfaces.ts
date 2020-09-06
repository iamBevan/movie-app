export interface Movie {
    id?: number
    video?: boolean
    vote_count?: number
    title?: string
    release_date?: string
    original_language?: string
    backdrop_path?: string
    adult?: boolean
    overview?: string
    poster_path?: string | null
    popularity?: number
    media_type?: string
    original_title?: string
    name?: string
    genre_ids: number[]
    first_air_date?: string
}
