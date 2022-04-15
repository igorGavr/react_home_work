import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username} = user
    return (
        <div>
            <div>
                {id} -- {name} -- {username}
            </div>
            <div>
                <Link to={id.toString()} state={user}>Get Details</Link>
            </div>

        </div>
    );
};

export {User};