import React from 'react';
import {Link} from "react-router-dom";

const UserComponent = ({item}) => {
    const {id, name} = item
    return (
        <div>
            {id} - {name} <Link to={id.toString()} state={{...item}}>details</Link>
        </div>
    );
};

export {UserComponent};