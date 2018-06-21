import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { getCountries } from './actions/actions-countries.js';

render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes}/>
	</Provider>,
	document.getElementById('root')
);