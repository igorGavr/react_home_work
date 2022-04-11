import React, {useEffect, useState} from 'react';
import ApiService from "../services/api.service";
import {PostComponent} from "../components/PostComponent";
import {Outlet} from "react-router-dom";

const Posts = () => {
    const apiService = new ApiService('posts');

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setPosts(value))
    }, [])
    return (
        <div>
            <Outlet/>

            {
                posts.map(value => <PostComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export {Posts};