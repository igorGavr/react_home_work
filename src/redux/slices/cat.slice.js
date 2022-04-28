import {createSlice} from "@reduxjs/toolkit";


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
            const newCat = { name: cat, id: new Date().getTime()}
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
            state.cats[index].name = name
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