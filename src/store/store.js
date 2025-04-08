import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";

const store = configureStore({
    reducer : {
        user:reducer,
    },
});
export default store;