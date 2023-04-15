import { createAsyncThunk } from "@reduxjs/toolkit"

import { fetchAppointmentsRoute, fetchDonorDonationHistoryRoute, fetchInventoryItemHistoryRoute, fetchInventoryItemsRoute, rescheduleAppointmentRoute, updateInventoryItemUnitsRoute } from "../routes/hospital.routes"


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