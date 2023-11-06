import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import App from './App';
import { PropPage } from './PropPage';
import { CounterPage } from './CounterPage';
import { JsonPlaceHolder } from './JsonPlaceHolder';
import { PixabayPage } from './PixabayPage';

export const RouterConfig:React.VFC = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path='prop-page' index element={<PropPage />} />
            <Route path='counter-page' index element={<CounterPage />} />
            <Route path='jsonph-page' index element={<JsonPlaceHolder />} />
            <Route path='pixabay-page' index element={<PixabayPage />} />
        </Routes>
        </BrowserRouter>
        </>
    );
};