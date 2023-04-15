import { API } from '../config'


export const authSignupRoute = (formData) => API.post(`/auth/hospital/signup`, formData)


export const authSigninRoute = (formData) => API.post(`/auth/hospital/signin`, formData)


export const authCaptureKYBRoute = (formData) => API.post(`/registration/hospital/kyb-capture`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })