import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        searchPageToggle: false
    },
    reducers: {
        setSearchPageToggle: (state) => {
            state.searchPageToggle = !state.searchPageToggle
        }
    }
})

export const { setSearchPageToggle } = gptSlice.actions;
export default gptSlice.reducer