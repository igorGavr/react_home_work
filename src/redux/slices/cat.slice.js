import {createSlice} from "@reduxjs/toolkit";
import {logDOM} from "@testing-library/react";

const initialState = {
    cats: [],
    catForUpdate: null
};

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {cat} = action.payload;
            console.log(action.payload)
            console.log(cat)
            const newCat = { cat, id: new Date().getTime()}
            state.cats.push(newCat)
        },
        deleteById: (state, action) => {
            const index = state.cats.findIndex(value => value.id === action.payload.id)
            state.cats.splice(index, 1)
        },
        setCatForUpdate:(state,action)=>{
            state.catForUpdate = action.payload.cat
        },
        updateCat: (state,action)=>{
            const {id, name} = action.payload
            const index = state.cats.findIndex(value => value.id===id)
            state.cats[index].nameCat = name
            state.catForUpdate = false
        }
    }
});

const {reducer: catReducer, actions: {add, deleteById, setCatForUpdate, updateCat}} = catSlice;

export default catReducer
export const catActions = {
    add,
    deleteById,
    setCatForUpdate,
    updateCat
}