import React from "react";
import { CastData } from "../../hooks/interfaces";

const CastSection: React.FC<CastData> = ({ cast, crew, id }) => {
	const handleCast = () => {
		return (
			cast &&
			cast.map(castMember => {
				return (
					<div style={{ display: "flex" }}>
						<h1>{castMember.character}</h1>
						<h2>{castMember.name}</h2>
					</div>
				);
			})
		);
	};

	return <>{handleCast()}</>;
};

export { CastSection };
