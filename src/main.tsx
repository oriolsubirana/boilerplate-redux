import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloWorldContainer, NameEditConainer, MemberAreaContainer } from './components';
import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxThunk)
));

ReactDOM.render(
    <Provider store={store}>
        <HelloWorldContainer />
        <NameEditConainer />
        <MemberAreaContainer />
    </Provider>,
    document.getElementById('root')
)