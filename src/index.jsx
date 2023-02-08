import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)