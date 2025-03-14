import { createSlice } from "@reduxjs/toolkit";


const langSlice = createSlice({
    name: 'lang',
    initialState: {
        currentLang: 'en'
    },
    reducers: {
        setCurrentLang: (state, action) => {
            state.currentLang = action.payload;
        }
    }
})

export const { setCurrentLang } = langSlice.actions;
export default langSlice.reducer;