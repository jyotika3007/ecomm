import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer , { initialState } from './reducer';
import StateProvider from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
{/* Wrap our app in a Provider which help to access dataLayer in all components */}
  <StateProvider initialState={initialState} reducer={reducer}>
    {/* reducer cause the add values to dataLayer */}
    <App />
  </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
