import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Login from './Login';
import Register from './Register';
import Example from './Example';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AuthRoute from "./AuthRoute";
import UserInfo from './UserInfo';

function App() {

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path={"/"} component={Example} />
					<AuthRoute exact path={"/userInfo"} component={UserInfo} />
					<Route exact path={"/login"} component={Login} />
					<Route exact path={"/register"} component={Register} />
				</Switch>
			</BrowserRouter>

		</Provider>
	);
}

export default App;
