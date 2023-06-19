import { API } from '../config'


export const authSignupRoute = (formData) => API.post(`/auth/hospital/signup`, formData)


export const authSigninRoute = (formData) => API.post(`/auth/hospital/signin`, formData)


export const authCaptureKYBRoute = (formData) => API.post(`/registration/hospital/kyb-capture`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })


export const authUpdateHospitalAuthDataRoute = (formData) => API.put(`/auth/hospital/update-profile`, formData)


export const authFetchHospitalProfileRoute = () => API.get(`/profile/hospital/fetch`)


export const authUpdateHospitalProfileRoute = (formData) => API.put(`/profile/hospital/update`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })