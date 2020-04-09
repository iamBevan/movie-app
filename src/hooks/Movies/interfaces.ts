export interface MovieDetailsSpokenLanguages {
    iso_3166_1: string
    name: string
}

export interface MovieDetailsProductionCountries {
    iso_3166_1: string
    name: string
}

export interface MovieDetailsProductionCompanies {
    name: string
    id: number
    logo_path: string | null
    origin_country: string
}

export interface MovieDetails {
    adult: boolean
    backdrop_path: string | null
    belongs_to_collection: null | {}
    budget: number
    genres: [{ id: number; name: string }]
    homepage: string | null
    id: number
    imdb_id: string | null // Validations:  minLength: 9, maxLength: 9, pattern:^tt[0-9]{7}
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    production_companies: MovieDetailsProductionCompanies[]
    production_countries: MovieDetailsProductionCountries[]
    release_date: string // format Date
    revenue: number
    runtime: number
    spoken_languages: MovieDetailsSpokenLanguages[]
    status: string // Allowed Values: Rumored, Planned, In Production, Post Production, Released, Cancelled
    tagline: string | null
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface MovieReleaseDates {
    id: number
    results: [
        {
            iso_3166_1: string
            release_dates: [
                {
                    certification: string
                    iso_639_1: string
                    release_date: string
                    type: number
                    note: string
                }
            ]
        }
    ]
}

export interface CountryCert {
    certification: string
    meaning: string
    order: number
}

export interface Certifications {
    US: [CountryCert]
    CA: [CountryCert]
    DE: [CountryCert]
    GB: [CountryCert]
    AU: [CountryCert]
    BR: [CountryCert]
    FR: [CountryCert]
    NZ: [CountryCert]
    IN: [CountryCert]
}

export interface MovieCertification {
    certifications: Certifications
}
