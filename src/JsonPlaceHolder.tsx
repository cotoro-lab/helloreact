import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import jsonplaceholder from './apis/jsonplaceholder';
import JsonphButton from './components/JsonphButton';
import JsonphResouces from './components/JsonphResources';
import Header from './components/Header';

export const JsonPlaceHolder = () => {
    const [resources, setResources] = useState([]);
    const navigate = useNavigate();

    const getPosts=async()=>{
        try{
            const posts = await jsonplaceholder.get('/posts');
            setResources(posts.data);
        }catch (err){
            console.log(err);
        }
    };

    const getAlbums=async()=>{
        try{
            const albums = await jsonplaceholder.get('/albums');
            setResources(albums.data);
        }catch (err){
            console.log(err);
        }
    };

    return (
        <div className='ui container' style={{ marginTop: '20px' }}>
            <button onClick={() => navigate(-1)}>戻る</button>
            <Header title='JsonPlaceHolder Page' />
            <div className='ui container' style={{ marginTop: '30px' }}>
                <JsonphButton onClickElement={getPosts} color='primary' text='posts' />
                <JsonphButton onClickElement={getAlbums} color='red' text='albums' />
                <JsonphResouces resources={resources}/>
            </div>
        </div>

    )
};