import { createSlice } from "@reduxjs/toolkit";


const UserDataSlice = createSlice({
    name: 'UserData',
    initialState :{
        loginUserData : {},
        isLoggedIn: false
    },
    reducers : {
        loginData : (state, action) =>{
            state.loginUserData = action.payload
            state.isLoggedIn = true
        },
        logoutUser: (state) => {
            state.loginUserData = {}
            state.isLoggedIn = false
        }
    }
})

export const {loginData, logoutUser} = UserDataSlice.actions;
export default UserDataSlice.reducer