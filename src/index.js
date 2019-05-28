import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const lockers = [{
    id: 1,
    name : '',
    isSelect : true
  },{
    id: 2,
    name : '',
    isSelect : true
  },{
    id: 3,
    name : '',
    isSelect : true
  },{
    id: 4,
    name : '',
    isSelect : true
  },{
    id: 5,
    name : '',
    isSelect : true
  },{
    id: 6,
    name : '',
    isSelect : true
  }];

const store = createStore(reducer,{lockers:lockers})
ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
