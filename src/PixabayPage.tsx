import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import Header from './components/Header';
import ImageList from './components/ImageList';
import { Image } from './interface/ImageInterface';


export const PixabayPage = () => {
    const navigate = useNavigate();

    const [images, setImages] = useState<Image[]>([]);
    const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;

    const onSearchSubmit = async(term: string) => {
        try
        {
            const params = {
                key : ApiKey,
                q : term,
            };
            const respons = await axios.get("https://pixabay.com/api/", {params});
            setImages(respons.data.hits);
            if(respons.data.total == 0)
            {
                window.alert('お探しの画像はありません。');
            }
        }
        catch
        {
            window.alert('写真の取得に失敗しました(＞＜;)');
        }
    };

    return(
        <div className='ui container' style={{margin: "20px"}}>
            <button onClick={() => navigate(-1)} >戻る</button>
            <Header title='Pixabay Page' />
            <SearchBar onSBSubmit = {onSearchSubmit} />
            <ImageList images={images}/>
        </div>
    )
};