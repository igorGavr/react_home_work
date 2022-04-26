import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user.slice";

const User = ({user:{id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {name}-- {id }
            <button onClick={() => dispatch(userActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export {User};