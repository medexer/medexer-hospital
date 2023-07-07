import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit"

import { authCaptureKYBRoute, authFetchHospitalProfileRoute, authSigninRoute, authSignupRoute, authUpdateHospitalAuthDataRoute, authUpdateHospitalProfileRoute } from "../routes/auth.routes"


export const authHospitalSignup = createAsyncThunk(
    'auth/authHospitalSignup',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_APP_DEV_API}/auth/hospital/signup`, formData)

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
            const { data } = await axios.post(`${import.meta.env.VITE_APP_DEV_API}/auth/hospital/signin`, formData)

            console.log(data)

            toast.success("Login successful")
            await localStorage.setItem('mdx-dnt-center', JSON.stringify(data.data))
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
            const USERFROMLS = localStorage.getItem('mdx-dnt-center') ? JSON.parse(localStorage.getItem('mdx-dnt-center')) : null

            const USER = {
                ...USERFROMLS,
                hospital: data.data.hospital
            }

            await localStorage.setItem('mdx-dnt-center', JSON.stringify(USER))
            navigate('/dashboard', { replace: true })

            return USER
        } catch (error) {
            console.log(error)
            toast.error('An error ocurred during KYB capture')
            return rejectWithValue(null)
        }
    }
)


export const authUpdateHospitalAuthData = createAsyncThunk(
    'auth/authUpdateHospitalAuthData',
    async ({ formData, toast }, { rejectWithValue }) => {
        try {
            const { data } = await authUpdateHospitalAuthDataRoute(formData)

            console.log(data)

            toast.success("Profile update successful")
            const USERFROMLS = localStorage.getItem('mdx-dnt-center') ? JSON.parse(localStorage.getItem('mdx-dnt-center')) : null

            const USER = {
                ...USERFROMLS,
                hospital: data.data
            }

            await localStorage.setItem('mdx-dnt-center', JSON.stringify(USER))

            return USER
        } catch (error) {
            console.log(error)
            if (error.response.data.message) {
                toast.error(error.response.data.message)
                return rejectWithValue(null)
            }
            toast.error('An error ocurred while updating hospital auth data')
            return rejectWithValue(null)
        }
    }
)


export const authFetchHospitalProfile = createAsyncThunk(
    'auth/authFetchHospitalProfile',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await authFetchHospitalProfileRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const authUpdateHospitalProfile = createAsyncThunk(
    'auth/authUpdateHospitalProfile',
    async ({ formData, toast }, { rejectWithValue }) => {
        try {
            const { data } = await authUpdateHospitalProfileRoute(formData)

            console.log(data)

            toast.success("Profile update successful")

            return data.data
        } catch (error) {
            console.log(error)
            if (error.response.data.message) {
                toast.error(error.response.data.message)
                return rejectWithValue(null)
            }
            toast.error('An error ocurred while updating hospital profile')
            return rejectWithValue(null)
        }
    }
)


export const authLogout = createAsyncThunk(
    'auth/authLogout',
    async ({ toast, navigate, updateDashboardConfig }, { rejectWithValue }) => {
        try {

            toast.success("Logout successful")
            await localStorage.removeItem('mdx-dnt-center')
            updateDashboardConfig({ activeLink: 'Home' })

            navigate('/', { replace: true })

            return null
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)