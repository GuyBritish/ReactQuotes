import React from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const SAMPLE_QUOTES = [
	{ id: "q1", author: "Max", text: "Learning React is fun" },
	{ id: "q2", author: "Khai", text: "Learning React is fun" },
];

const QuoteDetail = () => {
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

			<Route path={`/quotes/${params.id}/comments`}>
				<Comments />
			</Route>
		</React.Fragment>
	);
};

export default QuoteDetail;
