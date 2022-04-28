import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dogActions} from "../redux/slices/dog.slice";

const DogForm = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const {dogForUpdate} = useSelector(state => state.dog);

    useEffect(() => {
        if (dogForUpdate) {
            setName(dogForUpdate.name)
        }
    },[dogForUpdate])

    const save = () => {
      if (dogForUpdate) {
          dispatch(dogActions.updateDog({name, id: dogForUpdate.id}))
      } else {
          dispatch(dogActions.add({name}))
      }
      setName('')
    }
    return (
        <div>
            <label>Dog name:<input type="text" placeholder={'Dog name: '}
                onChange={event => setName(event.target.value)}
                value={name}/> </label>
            <button onClick={save}>{dogForUpdate ? 'update' : 'create'}</button>
        </div>
    );
};

export {DogForm};