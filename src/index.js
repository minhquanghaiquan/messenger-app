import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'
import { Provider } from 'react-redux';
import store from './store';


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDVU3cLLzz4lY2pyS4rdkpRNwuByM1NES8",
  authDomain: "web-messenger-52fdf.firebaseapp.com",
  databaseURL: "https://web-messenger-52fdf.firebaseio.com",
  projectId: "web-messenger-52fdf",
  storageBucket: "web-messenger-52fdf.appspot.com",
  messagingSenderId: "341726804952",
  appId: "1:341726804952:web:0e8a3e922fb605a06e90ad",
  measurementId: "G-SH288K26SX"
};

firebase.initializeApp(firebaseConfig)

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
