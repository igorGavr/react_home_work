import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";
import userReducer from "./slices/user.slice";
import dogReducer from "./slices/dog.slice";
import catReducer from "./slices/cat.slice";


const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    dog: dogReducer,
    cat: catReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store
