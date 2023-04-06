import { createSlice } from '@reduxjs/toolkit'


const USERFROMLS = localStorage.getItem('medexer-hospital') ? JSON.parse(localStorage.getItem('medexer-hospital')) : null


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: USERFROMLS ? USERFROMLS : null,
        authLoading: false,
        authRequestStatus: null,
    },
    extraReducers: {
        
    }
})


export default authSlice.reducer;