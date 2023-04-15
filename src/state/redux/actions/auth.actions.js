import { createAsyncThunk } from "@reduxjs/toolkit"

import { authCaptureKYBRoute, authSigninRoute, authSignupRoute } from "../routes/auth.routes"


export const authHospitalSignup = createAsyncThunk(
    'auth/authHospitalSignup',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await authSignupRoute(formData)

            console.log(data)
            toast.success("Hospital registred successfully")
            navigate('/', { replace: true })

            return data.data
        } catch (error) {
            console.log(error)
            if (error.response.data.data['email'][0] === 'User with this Email Address already exists.') {
                toast.error('Duplicate record, hospital already exists!')
                return rejectWithValue(null)
            }
            toast.error('An error ocurred during hospital registration')
            return rejectWithValue(null)
        }
    }
)


export const authHospitalSignin = createAsyncThunk(
    'auth/authHospitalSignin',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await authSigninRoute(formData)

            console.log(data)

            toast.success("Login successful")
            await localStorage.setItem('mdx-user', JSON.stringify(data.data))
            navigate('/dashboard', { replace: true })

            return data.data
        } catch (error) {
            console.log(error)
            if (error.response.data.status) {
                toast.error(error.response.data.status)
                return rejectWithValue(null)
            }
            toast.error('An error ocurred during login')
            return rejectWithValue(null)
        }
    }
)


export const authCaptureHospitalKYB = createAsyncThunk(
    'auth/authCaptureHospitalKYB',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await authCaptureKYBRoute(formData)

            console.log(data)

            toast.success("KYC capture successful")
            const USERFROMLS = localStorage.getItem('mdx-user') ? JSON.parse(localStorage.getItem('mdx-user')) : null

            const USER = {
                ...USERFROMLS,
                hospital: data.data.hospital
            }

            await localStorage.setItem('mdx-user', JSON.stringify(USER))
            navigate('/dashboard', { replace: true })

            return USER
        } catch (error) {
            console.log(error)
            toast.error('An error ocurred during KYB capture')
            return rejectWithValue(null)
        }
    }
)


export const authLogout = createAsyncThunk(
    'auth/authLogout',
    async ({ toast, navigate }, { rejectWithValue }) => {
        try {

            toast.success("Logout successful")
            await localStorage.removeItem('mdx-user')
            navigate('/', { replace: true })

            return null
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)