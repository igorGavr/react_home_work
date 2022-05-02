import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {episodeReducer, locationReducer} from "./slices";
import {characterReducer} from "./slices/character.slice";

const rootReducer = combineReducers({
    episodes: episodeReducer,
    locations: locationReducer,
    characters: characterReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}