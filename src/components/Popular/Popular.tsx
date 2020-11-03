import React, { useEffect, useState } from "react";
import styles from "./Popular.module.scss";
import { Popular, PopularResults } from "../../hooks/interfaces";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { ApiData } from "../../helpers/apiData";

const PopularList = () => {
	const [popular, setPopular] = useState<Popular>();

	useEffect(() => {
		const _popular = new ApiData();
		_popular.getPopular().then(data => {
			setPopular(data);
		});
	}, []);

	const createPopularList = () => {
		const popularList: PopularResults[] = [];
		if (popular !== undefined) {
			for (let i: number = 0; i < 6; i++) {
				popularList.push(popular?.results[i]);
			}
		}
		return popularList;
	};

	return (
		<div className={styles["popular"]}>
			<h1>Popular</h1>
			<div className={styles["grid"]}>
				{createPopularList().map((el: PopularResults) => (
					<ProfileCard
						name={el.name}
						profile_path={el.profile_path}
						key={el.id}
						adult
						id={el.id}
						known_for={el.known_for}
						popularity={el.popularity}
					/>
				))}
			</div>
		</div>
	);
};

export { PopularList };
