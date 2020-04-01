export interface Data {
    cast: Cast[]
    crew: Crew[]
    id: number
}

export interface Cast {
    cast_id: number
    character: string
    credit_id: string
    gender: number
    id: number
    name: string
    order: number
    profile_path: string
}

export interface Crew {}
