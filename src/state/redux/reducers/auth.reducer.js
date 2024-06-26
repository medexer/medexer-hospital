import { createSlice } from '@reduxjs/toolkit'
import { authCaptureHospitalKYB, authFetchHospitalProfile, authHospitalForgotPassword, authHospitalResetPassword, authHospitalSignin, authHospitalSignup, authLogout, authUpdateHospitalAuthData, authUpdateHospitalMedia, authUpdateHospitalProfile } from '../actions/auth.actions'


const USERFROMLS = localStorage.getItem('mdx-dnt-center') ? JSON.parse(localStorage.getItem('mdx-dnt-center')) : null


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: USERFROMLS ? USERFROMLS : null,
        newHospital: null,
        hospitalProfile: null,
        authLoading: false,
        authRequestStatus: null,
    },
    extraReducers: (builder) => {
        builder.addCase(authHospitalSignup.pending, (state, action) => {
            state.authLoading = true
            state.authRequestStatus = 'PENDING'
        })
        builder.addCase(authHospitalSignup.fulfilled, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = 'SUCCESS'
            state.newHospital = action.payload
        })
        builder.addCase(authHospitalSignup.rejected, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = ''
        })

        builder.addCase(authHospitalSignin.pending, (state, action) => {
            state.authLoading = true
            state.authRequestStatus = 'PENDING'
        })
        builder.addCase(authHospitalSignin.fulfilled, (state, action) => {
            state.authLoading = false
            state.user = action.payload
            state.authRequestStatus = 'SUCCESS'
        })
        builder.addCase(authHospitalSignin.rejected, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = 'FAILED'
        })

        builder.addCase(authHospitalForgotPassword.pending, (state, action) => {
            state.authLoading = true
            state.authRequestStatus = 'PENDING'
        })
        builder.addCase(authHospitalForgotPassword.fulfilled, (state, action) => {
            state.authLoading = false
            // state.user = action.payload
            state.authRequestStatus = 'SUCCESS'
        })
        builder.addCase(authHospitalForgotPassword.rejected, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = 'FAILED'
        })

        builder.addCase(authHospitalResetPassword.pending, (state, action) => {
            state.authLoading = true
            state.authRequestStatus = 'PENDING'
        })
        builder.addCase(authHospitalResetPassword.fulfilled, (state, action) => {
            state.authLoading = false
            // state.user = action.payload
            state.authRequestStatus = 'SUCCESS'
        })
        builder.addCase(authHospitalResetPassword.rejected, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = 'FAILED'
        })



        builder.addCase(authCaptureHospitalKYB.pending, (state, action) => {
            state.authLoading = true
            state.authRequestStatus = 'PENDING'
        })
        builder.addCase(authCaptureHospitalKYB.fulfilled, (state, action) => {
            state.authLoading = false
            state.user = action.payload
            state.authRequestStatus = 'SUCCESS'
        })
        builder.addCase(authCaptureHospitalKYB.rejected, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = ''
        })



        builder.addCase(authUpdateHospitalAuthData.pending, (state, action) => {
            state.authLoading = true
            state.authRequestStatus = 'PENDING'
        })
        builder.addCase(authUpdateHospitalAuthData.fulfilled, (state, action) => {
            state.authLoading = false
            state.user = action.payload
            state.authRequestStatus = 'SUCCESS'
        })
        builder.addCase(authUpdateHospitalAuthData.rejected, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = ''
        })

        builder.addCase(authFetchHospitalProfile.pending, (state, action) => {
            state.authLoading = true
        })
        builder.addCase(authFetchHospitalProfile.fulfilled, (state, action) => {
            state.authLoading = false
            state.hospitalProfile = action.payload
        })
        builder.addCase(authFetchHospitalProfile.rejected, (state, action) => {
            state.authLoading = false
        })

        builder.addCase(authUpdateHospitalProfile.pending, (state, action) => {
            state.authLoading = true
            state.authRequestStatus = 'PENDING'
        })
        builder.addCase(authUpdateHospitalProfile.fulfilled, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = 'SUCCESS'
            state.hospitalProfile = action.payload
        })
        builder.addCase(authUpdateHospitalProfile.rejected, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = ''
        })

        builder.addCase(authUpdateHospitalMedia.pending, (state, action) => {
            state.authLoading = true
            state.authRequestStatus = 'PENDING'
        })
        builder.addCase(authUpdateHospitalMedia.fulfilled, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = 'SUCCESS'
            state.hospitalProfile = action.payload
        })
        builder.addCase(authUpdateHospitalMedia.rejected, (state, action) => {
            state.authLoading = false
            state.authRequestStatus = ''
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