import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './store/reducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchQuestNext } from './sagas/saga'
//import rootSaga from './sagas/index'
//import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchQuestNext);

//store.dispatch({type: 'LOGOUT'});
//store.dispatch({type: 'LOGIN'});
//store.dispatch({type: 'LOGOUT'});
//store.dispatch({ type: 'DANG'})

ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
