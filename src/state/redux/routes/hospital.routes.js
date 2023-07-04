import { API } from "../config"


export const searchDonorsRoute = (query) => API.get(`/hospital/donors/${query}/search`)


export const fetchMedicalHistoryDonorsRoute = () => API.get(`/medical-data/hospital/donors/fetch-all`)


export const fetchDonorMedicalHistoryRoute = (donor) => API.get(`/medical-data/hospital/${donor}/medical-history/fetch-all`)


export const fetchRecentDonorAppointmentsRoute = (donor) => API.get(`/medical-data/hospital/${donor}/recent-appointments`)


export const fetchAddDonorMedicalHistoryRoute = (formData) => API.post(`/medical-data/hospital/${formData.donor}/${formData.appointment}/medical-history/add`, formData)


export const fetchAppointmentsRoute = () => API.get(`/hospital/appointments`)


export const fetchInventoryItemsRoute = () => API.get(`/hospital/inventory/fetch-all`)


export const fetchInventoryItemRecordRoute = (bloodGroup) => API.get(`/hospital/inventory/${bloodGroup}/fetch-all`)


export const updateInventoryItemUnitsRoute = (formData) => API.put(`/hospital/inventory/${formData.inventoryItem}/update-units`, formData)


export const fetchInventoryItemHistoryRoute = (bloodGroup) => API.get(`/hospital/inventory/${bloodGroup}/activity/fetch-all`)


export const rescheduleAppointmentRoute = (formData) => API.put(`/hospital/appointment/update/${formData.id}`, formData)


export const processDonationRoute = (formData) => API.put(`/hospital/appointment/process/${formData.id}`, formData)


export const initializeDonationPaymentRoute = (formData) => API.post(`/hospital/appointment/payment/initialize/${formData.pkid}`, formData)


export const referenceDonationPaymentRoute = (reference) => API.get(`/hospital/appointment/payment/verify/${reference}`)


export const verifyDonationPaymentRoute = (formData) => API.post(`/administrator/payment-history/add-record`, formData)


export const fetchDonorDonationHistoryRoute = (appointmentId) => API.get(`/hospital/appointment/donor/donation-history/${appointmentId}`)


export const fetchComplaintsRoute = () => API.get(`/hospital/complaints/fetch-all`)


export const generateComplaintRoute = (formData) => API.post(`/hospital/complaints/generate`, formData)


export const fetchComplaintThreadRoute = (complaintId) => API.get(`/hospital/complaint/thread/${complaintId}/fetch-all`)


export const patchComplaintStatusRoute = (formData) => API.put(`/hospital/complaints/${formData.complaintId}/update`, formData)


export const replyComplaintThreadRoute = (formData) => API.post(`/hospital/complaint/thread/${formData.id}/reply`, formData)


export const fetchNotificationsRoute = () => API.get(`/hospital/notifications`)


export const patchNotificationRoute = (notificationId) => API.put(`/hospital/notifications/${notificationId}/update`, {})