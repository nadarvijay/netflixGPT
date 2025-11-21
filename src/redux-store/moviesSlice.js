import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        currentTrailerData: null,
        trailerPopUpToggle: false
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setCurrentTrailerData: (state, action) => {
            state.currentTrailerData = action.payload
        },
        setTrailerPopUpToggle: (state) => {
            state.trailerPopUpToggle = !state.trailerPopUpToggle
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, setCurrentTrailerData, setTrailerPopUpToggle } = moviesSlice.actions;
export default moviesSlice.reducer;