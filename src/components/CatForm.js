import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {catActions} from "../redux/slices/cat.slice";

const CatForm = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const {catForUpdate} = useSelector(state => state.cat);

    useEffect(() => {
        if (catForUpdate) {
            setName(catForUpdate.name);
        }
    }, [catForUpdate]);

    const save = () => {
      if (catForUpdate) {
          dispatch(catActions.updateCat({name, id: catForUpdate.id}))
      }else {
          dispatch(catActions.add({name}))
      }
      setName('')
    }
    return (
        <div>
            <label>Cat name: <input type="text"
                            onChange={(event => setName(event.target.value))}
                            value={name}/></label>
            <button onClick={save}>{catForUpdate ? 'update' : 'create'}</button>
        </div>
    );
};

export {CatForm};