import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import { getSingleQuote } from "../lib/api";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();

	const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

	const { id } = params;

	useEffect(() => {
		sendRequest(id);
	}, [sendRequest, id]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (!loadedQuote) {
		return <p>No quote found</p>;
	}

	return (
		<React.Fragment>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</React.Fragment>
	);
};

export default QuoteDetail;
