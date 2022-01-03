import React from "react";
import { Route, useParams, Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const SAMPLE_QUOTES = [
	{ id: "q1", author: "Max", text: "Learning React is fun" },
	{ id: "q2", author: "Khai", text: "Learning React is fun" },
];

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();

	const quote = SAMPLE_QUOTES.find((quote) => {
		return quote.id === params.id;
	});

	if (!quote) {
		return <p>No quote found!</p>;
	}

	return (
		<React.Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
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
