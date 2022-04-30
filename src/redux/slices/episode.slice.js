import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    pages: null,
    next: null,
    prev: null,
    episodes: [],
    currentEpisode: null
}
const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}) => {
        const {data} = await episodeService.getAll(page)
        return data
    }
);
const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    extraReducers: (builder => {
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
                state.episodes = results
            })
            
    })
});

const {reducer: episodeReducer} = episodeSlice;

const episodeActions = {
    getAll
}

export {
    episodeReducer,
    episodeActions
}