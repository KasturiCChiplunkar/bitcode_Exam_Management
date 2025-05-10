import { createSlice } from "@reduxjs/toolkit"

const initialState={
    exam:[]
}

const examSlice = createSlice({
    name:'createExam',
    initialState,
    reducers:{
        addExam:(state,action)=>{
            console.log(action.payload)
            state.exam.push(action.payload);
        }
    }
});

export const{addExam}=examSlice.actions;
export default examSlice.reducer;