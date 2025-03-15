import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        searchPageToggle: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        setSearchPageToggle: (state) => {
            state.searchPageToggle = !state.searchPageToggle
        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults
        }
    }
})

export const { setSearchPageToggle, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer