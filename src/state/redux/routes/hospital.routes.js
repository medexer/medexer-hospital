import { API } from "../config"


export const fetchAppointmentsRoute = () => API.get(`/hospital/appointments`)


export const fetchInventoryItemsRoute = () => API.get(`/hospital/inventory/fetch-all`)


export const updateInventoryItemUnitsRoute = (formData) => API.put(`/hospital/inventory/${formData.bloodGroup}/update-units`, formData)


export const fetchInventoryItemHistoryRoute = (bloodGroup) => API.get(`/hospital/inventory/${bloodGroup}/activity/fetch-all`)


export const rescheduleAppointmentRoute = (formData) => API.put(`/hospital/appointment/update/${formData.id}`, formData)


export const fetchDonorDonationHistoryRoute = (appointmentId) => API.get(`/hospital/appointment/donor/donation-history/${appointmentId}`)


export const fetchComplaintsRoute = () => API.get(`/hospital/complaints/fetch-all`)


export const generateComplaintRoute = (formData) => API.post(`/hospital/complaints/generate`, formData)


export const fetchComplaintThreadRoute = (complaintId) => API.get(`/hospital/complaint/thread/${complaintId}/fetch-all`)


export const patchComplaintStatusRoute = (formData) => API.put(`/hospital/complaints/${formData.complaintId}/update`, formData)


export const replyComplaintThreadRoute = (formData) => API.post(`/hospital/complaint/thread/${formData.id}/reply`, formData)


export const fetchNotificationsRoute = () => API.get(`/hospital/notifications`)


export const patchNotificationRoute = (notificationId) => API.put(`/hospital/notifications/${notificationId}/update`, {})