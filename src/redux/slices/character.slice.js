import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    pages: null,
    next: null,
    prev: null,
    allCharacters: []
}

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({page}) => {
        const {data} = await characterService.getAllCharacters(page)
        return data
    }
);

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {
                    info: {
                        pages, next, prev
                    },
                    results
                } = action.payload
                state.pages = pages
                state.next = next
                state.prev = prev
                state.allCharacters = results
            })
    }
});

const {reducer: characterReducer} = characterSlice

const characterActions = {
    getAll
}

export {
    characterReducer,
    characterActions
}