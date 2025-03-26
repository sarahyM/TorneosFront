import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {  IntlProvider } from 'react-intl';
import localEs from './locales/es.json';
import localEn from './locales/en.json';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const element = document.getElementById('root')
const root = ReactDOM.createRoot(element);

let messages = null;

if (navigator.language === "en") {
    messages = localEn;
} else {
    messages = localEs;
}


root.render(
        <IntlProvider locale={navigator.language} messages={messages}>
                <BrowserRouter>
                        <AuthProvider>
                                <Routes>
                                        <Route path="/*" element={<App/>} />
                                </Routes>
                        </AuthProvider>
                </BrowserRouter>
        </IntlProvider>
);

serviceWorkerRegistration.register();