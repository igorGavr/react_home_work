import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
};
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {name} = action.payload;
            const newUser = {id: new Date().getTime(), name}
            state.users.push(newUser)
        },
        deleteById:(state, action) => {
            const index = state.users.findIndex(value => value.id===action.payload.id);
            state.users.splice(index,1)
        }
    }
});

const {reducer: userReducer, actions: {add,deleteById}} = userSlice;

export default userReducer
export const userActions = {
    add,
    deleteById
}