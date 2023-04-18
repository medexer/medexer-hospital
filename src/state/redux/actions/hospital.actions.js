import { createAsyncThunk } from "@reduxjs/toolkit"

import { fetchAppointmentsRoute, fetchComplaintsRoute, fetchComplaintThreadRoute, fetchDonorDonationHistoryRoute, fetchInventoryItemHistoryRoute, fetchInventoryItemsRoute, fetchNotificationsRoute, generateComplaintRoute, patchComplaintStatusRoute, patchNotificationRoute, replyComplaintThreadRoute, rescheduleAppointmentRoute, updateInventoryItemUnitsRoute } from "../routes/hospital.routes"


export const hospitalFetchAppointments = createAsyncThunk(
    'hospital/hospitalFetchAppointments',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchAppointmentsRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchDonorDonationHistory = createAsyncThunk(
    'hospital/hospitalFetchDonorDonationHistory',
    async ({ appointmentId }, { rejectWithValue }) => {
        try {
            const { data } = await fetchDonorDonationHistoryRoute(appointmentId)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalRescheduleAppointment = createAsyncThunk(
    'hospital/hospitalRescheduleAppointment',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await rescheduleAppointmentRoute(formData)

            console.log(data)
            toast.success('Appointment rescheduled successfully')
            updateModals({ showRescheduleAppointmentModal: false })

            return data.data
        } catch (error) {
            console.log(error)
            toast.error('An error occured while rescheduling appointment')
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchInventory = createAsyncThunk(
    'hospital/hospitalFetchInventory',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchInventoryItemsRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalUpdateInventoryItemUnits = createAsyncThunk(
    'hospital/hospitalUpdateInventoryItemUnits',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await updateInventoryItemUnitsRoute(formData)

            console.log(data)
            updateModals({ showUpdateInventoryItemModal: false })
            toast.success(`${formData.bloodGroup} units updated successfully.`)

            return data.data
        } catch (error) {
            console.log(error)
            toast.error(`An error occured while updating ${formData.bloodGroup} units`)
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchInventoryItemHistory = createAsyncThunk(
    'hospital/hospitalFetchInventoryItemHistory',
    async ({ bloodGroup }, { rejectWithValue }) => {
        try {
            const { data } = await fetchInventoryItemHistoryRoute(bloodGroup)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchComplaints = createAsyncThunk(
    'hospital/hospitalFetchComplaints',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchComplaintsRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchComplaintThread = createAsyncThunk(
    'hospital/hospitalFetchComplaintThread',
    async ({ complaintId }, { rejectWithValue }) => {
        try {
            const { data } = await fetchComplaintThreadRoute(complaintId)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalUpdateComplaintStatus = createAsyncThunk(
    'hospital/hospitalUpdateComplaintStatus',
    async ({ formData, toast }, { rejectWithValue }) => {
        try {
            const { data } = await patchComplaintStatusRoute(formData)

            console.log(data)
            toast.success('Complaint status updated successfully')

            return data.data
        } catch (error) {
            console.log(error)
            toast.error('An error occured while updating complaint status.')
            return rejectWithValue(null)
        }
    }
)


export const hospitalReplyComplaintThread = createAsyncThunk(
    'hospital/hospitalReplyComplaintThread',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await replyComplaintThreadRoute(formData)

            console.log(data)
            toast.success('Complaint thread replied successfully')
            updateModals({ showReplyComplaintThreadModal: false })

            return data.data
        } catch (error) {
            console.log(error)
            toast.error('An error occured while replying complaint thread')
            return rejectWithValue(null)
        }
    }
)


export const hospitalGenerateComplaint = createAsyncThunk(
    'hospital/hospitalGenerateComplaint',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await generateComplaintRoute(formData)

            console.log(data)
            toast.success('Complaint generated successfully')
            updateModals({ showCreateComplaintModal: false })

            return data.data
        } catch (error) {
            console.log(error)
            toast.error('An error occured while generating complaint')
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchNotifications = createAsyncThunk(
    'hospital/hospitalFetchNotifications',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchNotificationsRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalUpdateNotification = createAsyncThunk(
    'hospital/hospitalUpdateNotification',
    async ({ notificationId }, { rejectWithValue }) => {
        try {
            const { data } = await patchNotificationRoute(notificationId)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalResetStateProperty = createAsyncThunk(
    'hospital/hospitalResetStateProperty',
    async ({ key, data = null }, { rejectWithValue }) => {
        try {

            return { key, data }
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)