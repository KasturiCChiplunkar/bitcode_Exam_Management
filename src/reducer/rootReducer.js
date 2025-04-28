import { combineReducers } from "redux";
import examSlice from "../reducer/createExamReducer";
import userSlice from "../reducer/reducer";

const rootReducer = combineReducers({
    createExam:examSlice,
    user:userSlice
});
export default rootReducer;