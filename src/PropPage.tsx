import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './components/Button';
import Header from './components/Header';

export const PropPage = () => {
    const navigate = useNavigate();
    return (
        <div className='ui container' style={{ marginTop: '20px' }}>
            <button onClick={() => navigate(-1)}>戻る</button>
            <Header title='Prop Page' />
            <Button title='post'/>
            <Button title='edit'/>
            <Button title='delete'/>
            <Button title='submit'/>
        </div>
    )

};