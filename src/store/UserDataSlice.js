import { createSlice } from "@reduxjs/toolkit";


const UserDataSlice = createSlice({
    name: 'UserData',
    initialState :{
        loginUserData : {}
    },
    reducers : {
        loginData : (state, action) =>{
            state.loginUserData = action.payload
        }
    }
})

export const {loginData } = UserDataSlice.actions;
export default UserDataSlice.reducer