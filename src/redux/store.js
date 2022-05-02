import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/user.slice";

const rootReducer = combineReducers({
    users: usersReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}