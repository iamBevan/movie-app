import React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface OverviewProps extends RouteComponentProps<{ id: string }> {}

const TVPage: React.FC<OverviewProps> = props => {
	return <>#</>;
};

export { TVPage };
