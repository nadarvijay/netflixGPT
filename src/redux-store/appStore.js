import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux-store/userSlice'
import moviesReducer from '../redux-store/moviesSlice';
import gptReducer from '../redux-store/gptSlice';
import langReducer from '../redux-store/langSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        lang: langReducer
    }
})

export default appStore;