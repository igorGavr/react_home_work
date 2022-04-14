import React from 'react';
import {Link} from "react-router-dom";
import css from './Post.module.css'

const Post = ({post}) => {
    const {userId, id, title} = post
    return (
        <div className={css.main}>
            <div>
                {userId} -- {id} -- {title}
            </div>
            <div>
                <Link to={id.toString()} state={post}>Get Details</Link>
            </div>

        </div>
    );
};

export {Post};