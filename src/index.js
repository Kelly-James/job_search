import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import apiReducer from './store/reducers/api';
import dashboardReducer from './store/reducers/api';
import searchReducer from './store/reducers/api';

import './index.css';

const rootReducer = combineReducers({
    api: apiReducer,
    dashboard: dashboardReducer,
    search: searchReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
