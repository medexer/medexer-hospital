import { createSlice } from '@reduxjs/toolkit'
import { authCaptureHospitalKYB, authHospitalSignin, authHospitalSignup, authLogout } from '../actions/auth.actions'


const USERFROMLS = localStorage.getItem('mdx-user') ? JSON.parse(localStorage.getItem('mdx-user')) : null


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: USERFROMLS ? USERFROMLS : null,
        newHospital: null,
        authLoading: false,
        authRequestStatus: null,
    },
    extraReducers: (builder) => {
        builder.addCase(authHospitalSignup.pending, (state, action) => {
            state.authLoading = true
        })
        builder.addCase(authHospitalSignup.fulfilled, (state, action) => {
            state.authLoading = false
            state.newHospital = action.payload
        })
        builder.addCase(authHospitalSignup.rejected, (state, action) => {
            state.authLoading = false
        })

        builder.addCase(authHospitalSignin.pending, (state, action) => {
            state.authLoading = true
        })
        builder.addCase(authHospitalSignin.fulfilled, (state, action) => {
            state.authLoading = false
            state.user = action.payload
        })
        builder.addCase(authHospitalSignin.rejected, (state, action) => {
            state.authLoading = false
        })



        builder.addCase(authCaptureHospitalKYB.pending, (state, action) => {
            state.authLoading = true
        })
        builder.addCase(authCaptureHospitalKYB.fulfilled, (state, action) => {
            state.authLoading = false
            state.user = action.payload
        })
        builder.addCase(authCaptureHospitalKYB.rejected, (state, action) => {
            state.authLoading = false
        })



        builder.addCase(authLogout.pending, (state, action) => {
            state.authLoading = true
        })
        builder.addCase(authLogout.fulfilled, (state, action) => {
            state.authLoading = false
            state.user = action.payload
        })
        builder.addCase(authLogout.rejected, (state, action) => {
            state.authLoading = false
        })
    }
})


export default authSlice.reducer;