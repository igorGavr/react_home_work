import React from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../redux/slices/cat.slice";

const Cat = ({cat}) => {
    const {id, name}= cat
    const dispatch = useDispatch();
    return (
        <div>
             {id} --{name}
            <button onClick={()=>dispatch(catActions.setCatForUpdate({cat}))}>update</button>
            <button onClick={() => dispatch(catActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export {Cat};