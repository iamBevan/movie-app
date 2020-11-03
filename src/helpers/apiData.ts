import axios, { AxiosStatic } from "axios";
import { TrendingMovies } from "../components/Trending/interfaces";
import { Popular } from "../hooks/interfaces";
import { Movies } from "../hooks/Search/interfaces";

class ApiData {
	private readonly apiUrl = `https://api.themoviedb.org/3/`;
	private readonly apiKey = process.env.REACT_APP_API_KEY;
	private axios: AxiosStatic;
	private query?: string | undefined;

	constructor(_query?: string) {
		this.axios = axios;
		this.query = _query;
	}
	public async getTrending() {
		const response = await this.axios.get<TrendingMovies>(
			`${this.apiUrl}trending/all/day?api_key=${this.apiKey}`
		);
		return response.data;
	}

	public async getPopular() {
		const response = await this.axios.get<Popular>(
			`${this.apiUrl}person/popular?api_key=${this.apiKey}&language=en-US&page=1`
		);
		return response.data;
	}

	public async getSearch() {
		const response = await this.axios.get<Movies>(
			`${this.apiUrl}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${this.query}`
		);
		return response.data;
	}
}

// const data = new ApiData("");

export { ApiData };
