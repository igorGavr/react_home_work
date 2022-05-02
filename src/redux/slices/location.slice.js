import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {locationService} from "../../services";

const initialState = {
    pages: null,
    next: null,
    prev: null,
    locations: []
}

const getAll = createAsyncThunk(
    'locationSlice/getAll',
    async ({page}) => {
        const {data} = await locationService.getAll(page)
        return data
    }
);

const locationSlice = createSlice({
   name: 'locationSlice',
    initialState,
    extraReducers: builder => {
       builder
           .addCase(getAll.fulfilled, (state, action) => {
               const {
                   info: {
                       pages, next, prev
                   },
                   results
               } = action.payload;
               state.pages = pages
               state.next = next
               state.prev = prev
               state.locations = results
           })
    }
});

const {reducer: locationReducer} = locationSlice;

const locationActions = {
    getAll
}

export {
    locationReducer,
    locationActions
}