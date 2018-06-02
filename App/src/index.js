import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleweare from 'redux-thunk';
import {reducer as reduxFormReducer} from 'redux-form'
import registerServiceWorker from './registerServiceWorker';

try {
  localStorage.setItem('test', 'test');
  localStorage.removeItem('test');
} catch (e) {
  alert("Por favor, ative os coockies de seu navegador, para continuar a navegação.");
}

const reducer = combineReducers({
  form: reduxFormReducer,
});

let store;
store = createStore(reducer, applyMiddleware(thunkMiddleweare));

const dest = document.getElementById('root');
ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ), dest);

registerServiceWorker();
