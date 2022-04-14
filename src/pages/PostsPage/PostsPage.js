import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../../components/Post/Post";
import {Outlet} from "react-router-dom";
import css from './PostsPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div className={css.main}>
            <div className={css.posts}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <div><Outlet/></div>

        </div>
    );
};

export {PostsPage};