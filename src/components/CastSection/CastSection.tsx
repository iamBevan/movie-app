import React, { useState } from "react";
import { Cast, CastData } from "../../hooks/interfaces";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import styles from "./CastSection.module.scss";

const CastSection: React.FC<CastData> = ({ cast, id }) => {
	const createCastList = (): Cast[] => {
		const newCastList: Cast[] = [];
		if (cast !== undefined) {
			for (let i: number = 0; i < 6; i++) {
				if (cast) newCastList.push(cast[i]);
			}
		}
		return newCastList;
	};

	const handleCast = () => {
		return (
			<div className={styles["cast"]}>
				<h1>Cast</h1>
				<div className={styles["grid"]}>
					{cast &&
						createCastList() &&
						createCastList().map(castMember => {
							return (
								<ProfileCard
									id={id}
									name={castMember.name}
									profile_path={castMember.profile_path}
								/>
							);
						})}
				</div>
			</div>
		);
	};

	return <>{handleCast()}</>;
};

export { CastSection };
