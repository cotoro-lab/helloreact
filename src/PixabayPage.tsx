import React from 'react';

import SearchBar from './components/SearchBar';


export const PixabayPage = () => {
    const onSearchSubmit = (term: string) => {
        console.log(term);
    };
    return(
        <div className='ui container' style={{margin: "20px"}}>
            <h1>Pixabay Page</h1>
            <SearchBar onSBSubmit = {onSearchSubmit} />
        </div>
    )
};