export interface CastData {
	cast: Cast[] | undefined;
	crew: Crew[] | undefined;
	id: number;
}

export interface Cast {
	cast_id: number;
	character: string;
	credit_id: string;
	gender: number;
	id: number;
	name: string;
	order: number;
	profile_path: string;
}

export interface Crew {}

export interface KnownFor {
	poster_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	original_title: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}

export interface PopularResults {
	profile_path: string;
	adult?: boolean;
	id: number;
	known_for?: KnownFor;
	name: string;
	popularity?: number;
}

export interface Popular {
	page: number;
	total_results: number;
	total_pages: number;
	results: PopularResults[];
}
