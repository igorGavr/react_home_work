import React, {useEffect, useState} from 'react';
import ApiService from "../services/api.service";
import {useParams} from "react-router-dom";

const PostDetails = () => {
    const [post, setPost] = useState([]);

    const apiService = new ApiService('posts');

    const {id} = useParams()

    useEffect(() => {
        apiService.getSingleData(id).then(value => setPost(value))
    }, [id])
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
};

export {PostDetails};