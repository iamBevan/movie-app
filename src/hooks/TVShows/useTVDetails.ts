import Axios from "axios";
import { useEffect, useState } from "react";
import { TVDetails } from "./interfaces";

const useTVDetails = (query: number) => {
	const [state, setState] = useState<TVDetails>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		)
			.then(res => {
				setState(res.data);
			})
			.catch(() => {
				console.log("Error");
			});

		const cleanup = () => {};

		return cleanup;
	}, [query]);

	return state;
};

export { useTVDetails };
