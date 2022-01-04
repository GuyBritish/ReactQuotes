import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuotes = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Quotes = React.lazy(() => import("./pages/Quotes"));

function App() {
	return (
		<Layout>
			<Suspense
				fallback={
					<div className="centered">
						<LoadingSpinner />
					</div>
				}
			>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/quotes" />
					</Route>
					<Route path="/quotes" exact>
						<Quotes />
					</Route>
					<Route path="/quotes/:id">
						<QuoteDetail />
					</Route>
					<Route path="/newquote">
						<NewQuotes />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</Layout>
	);
}

export default App;
