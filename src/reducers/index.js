import { combineReducers } from "@reduxjs/toolkit";
import activeNavReducer from "../features/activeNavSlice";
import hashMapOfSectionReducer from "../features/hashMapOfSectionSlice";
import queryReducer from "../features/querySlice";
import resultReducer from "../features/resultSlice";
import isSearchingActiveReducer from "../features/isSearchingActiveSlice";


const rootReducer = combineReducers({
    activeNav: activeNavReducer,
    hashMapOfSection: hashMapOfSectionReducer,
    query: queryReducer,
    result: resultReducer,
    isSearchingActive: isSearchingActiveReducer
});

export default rootReducer;