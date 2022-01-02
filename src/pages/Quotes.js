import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const SAMPLE_QUOTES = [
	{ id: "q1", author: "Max", text: "Learning React is fun" },
	{ id: "q2", author: "Khai", text: "Learning React is fun" },
];

const Quotes = () => {
	return (
		<React.Fragment>
			<h1>All Quotes</h1>
			<QuoteList quotes={SAMPLE_QUOTES} />
		</React.Fragment>
	);
};

export default Quotes;
