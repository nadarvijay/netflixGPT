import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux-store/userSlice'
import moviesReducer from '../redux-store/moviesSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
})

export default appStore;