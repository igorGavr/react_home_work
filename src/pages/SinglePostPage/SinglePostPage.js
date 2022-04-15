import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {PostDetails} from "../../components";
import {postService} from "../../services";
import css from './SinglePostPage.module.css'

const SinglePostPage = () => {
    const {state} = useLocation()
    const [post, setPost] = useState(state);
    const {id} = useParams()

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPost(data))
        }else {
            setPost(state)
        }
    } ,[id, state])
    return (
        <div className={css.main}>
            {
                post && <PostDetails post={post}/>
            }
        </div>
    );
};

export {SinglePostPage};