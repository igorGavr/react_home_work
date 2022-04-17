import React, {useEffect, useState} from 'react';
import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";
import {useParams} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        commentService.getByPostId(id).then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};