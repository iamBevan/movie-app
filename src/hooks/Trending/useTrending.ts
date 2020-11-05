import Axios from "axios";
import { useEffect, useState } from "react";
import { TrendingMovies } from "../../components/Trending/interfaces";

const useTrending = () => {
	const [trending, setTrending] = useState<TrendingMovies>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
		)
			.then(res => {
				setTrending(res.data);
			})
			.catch(() => {
				console.log("Error");
			});

		const cleanup = () => {};

		return cleanup;
	}, []);

	return trending;
};

export { useTrending };
