import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import {ListBook} from "./component/bai_6/ListBook";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import store from "../../bai_tap/src/component/bai_7/redux/Store.js"

import { createStore } from 'redux';
import userReducer from './component/bai_7/redux/Reducer';

const store = createStore(userReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
