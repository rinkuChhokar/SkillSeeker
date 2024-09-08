import { createSlice } from "@reduxjs/toolkit";

const isSearchingActiveSlice = createSlice({
    name: "isSearchingActive",
    initialState: {
        value: false
    },

    reducers: {
        setIsSearchingActive: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setIsSearchingActive } = isSearchingActiveSlice.actions;
export default isSearchingActiveSlice.reducer;