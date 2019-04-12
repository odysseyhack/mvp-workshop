import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import App from './js/components/App';
import ScrollToTop from './js/components/atoms/ScrollToTop/ScrollToTop';
import { store, history } from './js/redux/store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);