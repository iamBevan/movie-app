import { Movie } from '../MovieCard/interfaces'

export interface TrendingMovies {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export interface TrendingProps {
    trending: TrendingMovies
}
