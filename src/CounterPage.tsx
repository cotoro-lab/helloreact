import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Counter } from './components/Counter';
import Header from './components/Header';

export const CounterPage = () => {
    const navigate = useNavigate();
    return (
        <div className='ui container' style={{ marginTop: '20px' }}>
            <button onClick={() => navigate(-1)}>戻る</button>
            <Header title='Counter Page' />
            <Counter />
        </div>

    );
};