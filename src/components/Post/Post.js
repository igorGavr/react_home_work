import React from 'react';
import {Link} from "react-router-dom";
import css from './Post.module.css'
import {Button} from "../../components";

const Post = ({post}) => {
    const {userId, id, title} = post
    return (
        <div className={css.main}>
            <div>
                {userId} -- {id} -- {title}
            </div>
            <div>
                <Button to={id.toString()} state={post}>Get Details</Button>
            </div>

        </div>
    );
};

export {Post};