import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import App from './js/components/App'
import ScrollToTop from './js/components/atoms/ScrollToTop/ScrollToTop'
import { store, history } from './js/redux/store'

axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
