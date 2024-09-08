import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: "result",
    initialState: {
        value: []
    },

    reducers: {
        setResult: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setResult } = resultSlice.actions;
export default resultSlice.reducer;