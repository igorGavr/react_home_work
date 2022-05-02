import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users: []
}

const getUsersAsync = createAsyncThunk(
    'usersSlice/getUsersAsync',
    async ({page}) => {
        const {data} = await userService.getAll(page)
        return data
    }
);

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    extraReducers:builder => {
        builder
            .addCase(getUsersAsync.fulfilled, (state, action) => {
                state.users = action.payload
            })
    }
});

const {reducer: usersReducer} = usersSlice

const usersActions = {
    getUsersAsync
}

export {
    usersReducer,
    usersActions
}