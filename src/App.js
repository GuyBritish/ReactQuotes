import { Route, Switch, Redirect } from "react-router-dom";

import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetails";
import NewQuotes from "./pages/NewQuote";

import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
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
				<Route path="/newquotes">
					<NewQuotes />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
