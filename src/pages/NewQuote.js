import React from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
	const history = useHistory();
	const addQuoteHandler = (quote) => {
		console.log(quote);

		history.push("/quotes");
	};
	return (
		<React.Fragment>
			<h1>Add a new quote</h1>
			<QuoteForm onAddQuote={addQuoteHandler} />;
		</React.Fragment>
	);
};

export default NewQuotes;
