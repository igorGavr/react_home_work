import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: []
};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {name} = action.payload
            const newDog = {id: new Date().getTime() ,name}
            state.dogs.push(newDog)
        },
        deleteById: (state, action) => {
            const indexDelete = state.dogs.findIndex(value => value.id === action.payload.id);
            state.dogs.splice(indexDelete, 1)
        },
        updateDogById: (state, action) => {
            const indexUpdate = state.dogs.findIndex(value => value.id === action.payload.id);
            state.dogs.splice(indexUpdate, 1, action.payload)
        }
    }
});

const {reducer: dogReducer, actions: {add, deleteById, updateDogById}} = dogSlice;

export default dogReducer
export const dogActions = {
    add,
    deleteById,
    updateDogById
}