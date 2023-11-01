import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import App from './App';
import { PropPage } from './PropPage';
import { CounterPage } from './CounterPage';

export const RouterConfig:React.VFC = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path='prop-page' index element={<PropPage />} />
            <Route path='counter-page' index element={<CounterPage />} />
        </Routes>
        </BrowserRouter>
        </>
    );
};