import { createSlice } from "@reduxjs/toolkit";

const hashMapOfSectionSlice = createSlice({
    name: "hashMapOfSection",
    initialState: {
        value: {
            "Section 1": "HeroSection",
            "Section 2": "FeatureSection",
            "Section 3": "AboutSection",
            "Section 4": "TestimonialsSection",
            "Section 5": "ContactSection",
        }
    },

    reducers: {
        setHashMapOfSection: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setHashMapOfSection } = hashMapOfSectionSlice.actions;
export default hashMapOfSectionSlice.reducer;