import React, { useState, FormEvent, useEffect } from "react";
import styles from "./Search.module.scss";
import { useDebounce } from "react-use";
import { Movies, Results } from "../../hooks/Search/interfaces";
import { useSearchResults } from "../../helpers/useSearchCredits";
import { useSearch } from "../../hooks/Search/useSearch";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { ApiData } from "../../helpers/apiData";

const Search = () => {
	const [input, setInput] = useState("");
	const [search, setSearch] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [moviesResults, setMoviesResults] = useState<Movies>();
	const [state] = useSearchResults(moviesResults);

	useEffect(() => {
		const _trending = new ApiData(search);
		_trending.getSearch().then(data => {
			setMoviesResults(data);
		});
	}, [search]);

	const toggleOpen = () => {
		setIsOpen(false);
	};

	// eslint-disable-next-line no-empty-pattern
	const [] = useDebounce(
		() => {
			setSearch(input);
			setIsOpen(true);
		},
		500,
		[input]
	);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setInput(event.target.value);
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		//Route to search results
	};

	const dropDownList = (movies: Movies | undefined) => {
		let resultsArr = [];
		if (movies !== undefined) {
			if (Object.keys(movies).length > 0) {
				for (let i: number = 0; i < 7; i++) {
					let entry = Object.values(movies)[3];
					resultsArr.push(entry[i]);
				}
			}

			return resultsArr.map((el: Results, key) => {
				return (
					<Link to={`/movie/${el && el.id?.toString()}`}>
						<li key={key}>
							<img
								src={
									el?.poster_path
										? `https://image.tmdb.org/t/p/w185${el?.poster_path}`
										: `https://via.placeholder.com/50x75`
								}
								alt='poster'
							/>
							<div className={styles.info}>
								<div className={styles.title}>{el?.title}</div>
								<div className={styles.cast}>
									{state[key] && state[key].cast[0]?.name},{" "}
									{state[key] && state[key].cast[1]?.name}
								</div>
							</div>
						</li>
					</Link>
				);
			});
		}
	};

	return (
		<>
			<SearchBar
				input={input}
				onChange={onChange}
				onFocus={toggleOpen}
				dropDownList={dropDownList(moviesResults)}
				onSubmit={onSubmit}
				isOpen={isOpen}
				toggle={toggleOpen}
			/>
		</>
	);
};

export { Search };
