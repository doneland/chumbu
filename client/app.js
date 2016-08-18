import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import { Router }   from 'react-router';
import fetch        from 'isomorphic-fetch';
import cookie       from 'cookie';

import configureStore from '../shared/store/configureStore';
import routes         from '../shared/routes.jsx';
import history        from '../shared/history.js';


const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);
const locale = cookie.parse(document.cookie).locale || DEFAULT_LOCALE;


ReactDOM.render(
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('react-view')
);
