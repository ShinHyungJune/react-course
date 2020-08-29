import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Example from './Example';
import Other from './Other';

function App() {

	return (
		<Provider store={store}>
			<Example />
			<Other />
		</Provider>
	);
}

export default App;
