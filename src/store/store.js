import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";

const store = configureStore({
    reducer : {
        rootReducer:rootReducer,
    },
});
export default store;