import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/react-fontawesome'
import 'aos/dist/aos.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter> 
);


