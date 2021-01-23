import "./App.css";

import React from "react";

import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Faq from "./components/Faq";
import NotFound from "./components/NotFound";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />

				<Switch>
					<Route exact path="/">
						<Page />
					</Route>

					<Route path="/feed">
						<Feed />
					</Route>

					<Route path="/faq">
						<Faq />
					</Route>

					<Route path="*">
						<NotFound />
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
