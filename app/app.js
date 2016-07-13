import './app.scss'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import MessagesContainer from './messages/MessagesContainer.jsx';
import messagesReducer from './messages/messagesReducer';
import messageTextReducer from './messages/messageTextReducer';
import meetingReducer from './MeetingDetails/meetingReducer';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Layout from './Layout.jsx'
import LoginContainer from './Login/LoginContainer.jsx';
import { reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
import userReducer from './Login/userReducer';
import isAuthenticated from './Login/isAuthenticated';
import MeetingContainer from './MeetingDetails/MeetingContainer.jsx';
import IncrementContainer from './Increment/IncrementContainer.jsx';

var reducers = {
    messages: messagesReducer,
    messageText : messageTextReducer,
    form: formReducer,
    user: userReducer,
    meeting: meetingReducer
};

var rootReducer = combineReducers(reducers);

const loggerMiddleware = createLogger();

var configureStore = function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};

var store = configureStore();
var checkAuth = (nextState, replaceState) => isAuthenticated(store.getState().user, nextState, replaceState);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
           <Route path="/" component={Layout} >
               <IndexRoute component={MeetingContainer} />
               <Route path="/login" component={LoginContainer} />
               <Route path="/chat" component={MessagesContainer} />
               <Route path="/meeting" component={MeetingContainer} />
               <Route path="/increment" component={IncrementContainer} />

           </Route>
       </Router>
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}

