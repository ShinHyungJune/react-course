import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";
import Favorites from "./Favorites";
import Navigation from './Navigation';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* 여기에 페이지들 들어갈 예정 */}
				<Navigation />
				
				<Route exact path="/pageA/:title" component={PageA} />
				<Route exact path="/pageB" component={PageB} />
				<Route exact path="/favorites" component={Favorites} />
			</BrowserRouter>
		</div>
	);
}

export default App;
