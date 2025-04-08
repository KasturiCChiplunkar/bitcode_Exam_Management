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
    class:[ "",  
    ]
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser: (state,action)=>{
            state.user.push(action.payload);
        }
    }

});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;