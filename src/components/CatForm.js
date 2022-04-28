import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {catActions} from "../redux/slices/cat.slice";

const CatForm = () => {
    const {catForUpdate} = useSelector(state => state.cat);
    const nameInput = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (catForUpdate) {
            nameInput.current.value = catForUpdate.nameCat
        }
    }, [catForUpdate])

    const save = () => {
      if (catForUpdate) {
          const newCat = nameInput.current.value
          dispatch(catActions.updateCat({id: catForUpdate.id, nameInput: newCat}))
      } else {
          const cat = nameInput.current.value
          dispatch(catActions.add({cat: cat}))
      }
      nameInput.current.value = ''
    }
    return (
        <div>
            <label>Cat name:
                <input type="text" ref={nameInput} placeholder={'Cat name'}/>
            </label>
            <button onClick={() => save()}>{catForUpdate ? 'update' : 'create'}</button>
        </div>
    );
};

export {CatForm};