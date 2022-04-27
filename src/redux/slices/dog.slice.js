import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    dogForUpdate: null
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
        setDogForUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dog
        },
        updateDog: (state, action) => {
            const {id, name} = action.payload
            const index = state.dogs.findIndex((dog) => dog.id === id)
            state.dogs[index].name = name
            state.dogForUpdate = false
        }
    }
});

const {reducer: dogReducer, actions: {add, deleteById, setDogForUpdate, updateDog }} = dogSlice;

export default dogReducer
export const dogActions = {
    add,
    deleteById,
    setDogForUpdate,
    updateDog
}