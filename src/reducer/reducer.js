import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[{firstName:"",
        lastName:"",
        userName:"",
        password:"",
        phoneNo:"",
        email:"",
        dob:"",
        class:"",
        gender:"",
        role:""},
    ],
    class:[],
    loggedUser:[],
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser: (state,action)=>{
            console.log(action.payload);
            state.user.push(action.payload);
        },
        loggedUser:(state,action)=>{
            state.loggedUser.push(action.payload);
        }
    }
});

export const {addUser, loggedUser} = userSlice.actions;
export default userSlice.reducer;