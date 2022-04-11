import React from 'react';
import {useNavigate} from "react-router-dom"

const PostComponent = ({item}) => {
    const {id, title} = item

    const navigator = useNavigate()
    return (
        <div>
            {id} - {title}
            <button onClick={() => navigator(id.toString())}> click me to get details </button>
        </div>
    );
};

export {PostComponent};