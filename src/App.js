import React from "react";
import "./App.scss";
import ScrollContainer from "./components/ScrollContainer/ScrollContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className='App'>
			<ScrollContainer>
				<BrowserRouter>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
					</Switch>
				</BrowserRouter>
			</ScrollContainer>
		</div>
	);
}

export default App;
