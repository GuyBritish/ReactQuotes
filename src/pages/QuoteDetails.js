import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
	const params = useParams();
	return (
		<React.Fragment>
			<h1>Quote Detail</h1>
			<p>{params.id}</p>
		</React.Fragment>
	);
};

export default QuoteDetail;
