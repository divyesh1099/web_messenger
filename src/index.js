import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBxPQ3bVyK37rmpiDhIFApKm8gIMZv4bGo",
    authDomain: "web-messenger-4ff8e.firebaseapp.com",
    projectId: "web-messenger-4ff8e",
    storageBucket: "web-messenger-4ff8e.appspot.com",
    messagingSenderId: "720227442921",
    appId: "1:720227442921:web:afd7ffa9a9c418e82a5078",
    measurementId: "G-TWR026JFVC"
  };

  firebase.initializeApp(firebaseConfig);
  window.store = store;
ReactDOM.render(
  <Provider store={store}>

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
