import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser : null,
    isFetching : false,
    error : false
}
const userSlice = createSlice({
    name : "user",
    initialState,
    reducers: {
        loginStart : (state) =>{
            state.isFetching = true;
        },
        loginSuccess : (state , action) =>{
            state.currentUser = action.payload;
            state.isFetching = false;
        },
        loginfailure : (state) =>{
            state.isFetching = false;
            state.error = true;
        }
    }
})
export const {loginStart , loginSuccess , loginfailure} = userSlice.actions;
export default userSlice.reducer;