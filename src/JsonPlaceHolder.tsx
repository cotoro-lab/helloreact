import React, {useState} from 'react';

import jsonplaceholder from './apis/jsonplaceholder';
import JsonphButton from './components/JsonphButton';
import JsonphResouces from './components/JsonphResources';

export const JsonPlaceHolder = () => {
    const [resources, setResources] = useState([]);

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
        <div>
            <h1 style={{marginLeft: '20px'}}>JsonPlaceHoder</h1>
            <div className='ui container' style={{ marginTop: '30px' }}>
                <JsonphButton onClickElement={getPosts} color='primary' text='posts' />
                <JsonphButton onClickElement={getAlbums} color='red' text='albums' />
                <JsonphResouces resources={resources}/>
            </div>
        </div>

    )
};