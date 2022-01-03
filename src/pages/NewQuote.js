import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
	const { sendRequest, status } = useHttp(addQuote);

	const history = useHistory();

	useEffect(() => {
		if (status === "completed") {
			history.push("/quotes");
		}
	}, [status, history]);

	const addQuoteHandler = (quote) => {
		sendRequest(quote);
	};
	return (
		<React.Fragment>
			<h1>Add a new quote</h1>
			<QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />;
		</React.Fragment>
	);
};

export default NewQuotes;
