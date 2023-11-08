import React from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import Header from './components/Header';


export const PixabayPage = () => {
    const navigate = useNavigate();
    const onSearchSubmit = (term: string) => {
        console.log(term);
    };
    return(
        <div className='ui container' style={{margin: "20px"}}>
            <button onClick={() => navigate(-1)} >戻る</button>
            <Header title='Pixabay Page' />
            <SearchBar onSBSubmit = {onSearchSubmit} />
        </div>
    )
};