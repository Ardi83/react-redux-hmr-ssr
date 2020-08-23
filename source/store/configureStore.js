import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';

import configureHistory from '../client/app/configure/history'
import createRootReducer from './reducers'

export default function configureStore (url = '/') {
  const initialState = window.__PRELOADED_STATE__ || {}
  const history = configureHistory(url)

  const store =  createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  )

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept()
  }

  return {
    store,
    history,
  }
}
