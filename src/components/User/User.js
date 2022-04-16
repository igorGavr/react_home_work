import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username} = user
    return (
        <div>
            {id} - {name} - {username} <Link to={id.toString()} state={user}>User Details</Link>
        </div>
    );
};

export {User};