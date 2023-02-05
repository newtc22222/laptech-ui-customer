import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';

/**
 * @summary react-router-dom in App.js has createBrowserRouter
 * @since 2022-12-22
 */

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);