import Axios from "axios";
import { useEffect, useState } from "react";

interface ReturnedData<T> {
	data?: T;
	error?: string;
	loading: boolean;
}

export const useFetch = <FetchedData>(
	url: string
): ReturnedData<FetchedData> => {
	const [fetchedData, setFetchedData] = useState<ReturnedData<FetchedData>>({
		loading: true,
	});

	let endpoint = `https://api.themoviedb.org/3/`;

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const { data } = await Axios.get(`${endpoint}${url}`);

				setFetchedData({ data, loading: false, error: undefined });
			} catch {
				setFetchedData({
					data: undefined,
					loading: false,
					error: "Error",
				});
			}
		};

		fetchData();
	}, [endpoint, url]);

	return fetchedData;
};
