import React from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../redux/slices/cat.slice";

const Cat = ({cat: {id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {name} -- {id}
            <button onClick={() => dispatch(catActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export {Cat};