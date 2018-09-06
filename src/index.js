import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { Provider } from 'react-redux'
import { createStore, dispatch } from 'redux'
import rootReducer from './reducers/root'
import registerServiceWorker from './registerServiceWorker'
import * as actions from './actions/action'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//store.dispatch(actions.initState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
