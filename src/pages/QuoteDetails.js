import React from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
	const params = useParams();
	return (
		<React.Fragment>
			<h1>Quote Detail</h1>
			<p>{params.id}</p>
			<Route path={`/quotes/${params.id}/comments`}>
				<Comments />
			</Route>
		</React.Fragment>
	);
};

export default QuoteDetail;
