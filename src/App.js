import { Route, Switch } from "react-router-dom";

import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetails";
import NewQuotes from "./pages/NewQuote";

function App() {
	return (
		<Switch>
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
	);
}

export default App;
