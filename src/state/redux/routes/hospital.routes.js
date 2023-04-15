import { API } from "../config"


export const fetchAppointmentsRoute = () => API.get(`/hospital/appointments`)


export const fetchInventoryItemsRoute = () => API.get(`/hospital/inventory/fetch-all`)


export const updateInventoryItemUnitsRoute = (formData) => API.put(`/hospital/inventory/${formData.bloodGroup}/update-units`, formData)


export const fetchInventoryItemHistoryRoute = (bloodGroup) => API.get(`/hospital/inventory/${bloodGroup}/activity/fetch-all`)


export const rescheduleAppointmentRoute = (formData) => API.put(`/hospital/appointment/update/${formData.id}`, formData)


export const fetchDonorDonationHistoryRoute = (appointmentId) => API.get(`/hospital/appointment/donor/donation-history/${appointmentId}`)