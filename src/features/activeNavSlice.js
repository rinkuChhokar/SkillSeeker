import { createSlice } from "@reduxjs/toolkit";

const activeNavSlice = createSlice({
    name: "activeNav",
    initialState: {
        value: "HeroSection"
    },

    reducers: {
        setActiveNav: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setActiveNav } = activeNavSlice.actions;
export default activeNavSlice.reducer;