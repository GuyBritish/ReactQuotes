import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
	const addQuoteHandler = (quote) => {
		console.log(quote);
	};
	return (
		<React.Fragment>
			<h1>Add a new quote</h1>
			<QuoteForm onAddQuote={addQuoteHandler} />;
		</React.Fragment>
	);
};

export default NewQuotes;
