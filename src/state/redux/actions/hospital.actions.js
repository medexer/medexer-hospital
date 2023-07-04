import { createAsyncThunk } from "@reduxjs/toolkit"

import { fetchMedicalHistoryDonorsRoute, fetchAppointmentsRoute, fetchComplaintsRoute, fetchComplaintThreadRoute, fetchDonorDonationHistoryRoute, fetchInventoryItemHistoryRoute, fetchInventoryItemRecordRoute, fetchInventoryItemsRoute, fetchNotificationsRoute, generateComplaintRoute, initializeDonationPaymentRoute, patchComplaintStatusRoute, patchNotificationRoute, processDonationRoute, referenceDonationPaymentRoute, replyComplaintThreadRoute, rescheduleAppointmentRoute, updateInventoryItemUnitsRoute, verifyDonationPaymentRoute, fetchDonorMedicalHistoryRoute, fetchRecentDonorAppointmentsRoute, fetchAddDonorMedicalHistoryRoute, searchDonorsRoute } from "../routes/hospital.routes"


export const hospitalSearchDonors = createAsyncThunk(
    'hospital/hospitalSearchDonors',
    async ({ query }, { rejectWithValue }) => {
        try {
            const { data } = await searchDonorsRoute(query)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchMedicalHistoryDonors = createAsyncThunk(
    'hospital/hospitalFetchMedicalHistoryDonors',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchMedicalHistoryDonorsRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchDonorMedicalHistory = createAsyncThunk(
    'hospital/hospitalFetchDonorMedicalHistory',
    async ({ donor }, { rejectWithValue }) => {
        try {
            const { data } = await fetchDonorMedicalHistoryRoute(donor)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalFetchRecentDonorAppointments = createAsyncThunk(
    'hospital/hospitalFetchRecentDonorAppointments',
    async ({ donor }, { rejectWithValue }) => {
        try {
            const { data } = await fetchRecentDonorAppointmentsRoute(donor)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const hospitalAddDonorMedicalHistory = createAsyncThunk(
    'hospital/hospitalAddDonorMedicalHistory',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await fetchAddDonorMedicalHistoryRoute(formData)

            console.log(data)
            toast.success('Medical history added successfully')

            updateModals({ showAddMedicalHistoryModal: false })

            return data.data
        } catch (error) {
            console.log(error)
            toast.error('An error occured while adding donor medical history.')
            return rejectWithValue(null)
        }
    }
)


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


export const hospitalProcessDonation = createAsyncThunk(
    'hospital/hospitalProcessDonation',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await processDonationRoute(formData)

            console.log(data)
            toast.success('Donation processed successfully')
            updateModals({ showProcessDonationModal: false })

            return data.data
        } catch (error) {
            console.log(error)
            toast.error('An error occured while processing donation.')
            return rejectWithValue(null)
        }
    }
)


export const hospitalInitializePayment = createAsyncThunk(
    'hospital/hospitalInitializePayment',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await initializeDonationPaymentRoute(formData)

            await localStorage.setItem('MDX-PAYMENT-DATA', JSON.stringify(formData))

            console.log(data)
            updateModals({ showPaymentInitializationModal: false })

            return data.data
        } catch (error) {
            console.log(error)
            updateModals({ showPaymentInitializationModal: false })
            toast.error('An error occured while initializing payment.')
            return rejectWithValue(null)
        }
    }
)


export const hospitalVerifyPayment = createAsyncThunk(
    'hospital/hospitalVerifyPayment',
    async ({ reference }, { rejectWithValue }) => {
        try {
            const { data } = await referenceDonationPaymentRoute(reference)

            console.log(data)
            // toast.error('Payment verif.')

            return data.data.data
        } catch (error) {
            console.log(error)
            toast.error('An error occured while verifying payment.')
            return rejectWithValue(null)
        }
    }
)


export const hospitalGeneratePaymentHistory = createAsyncThunk(
    'hospital/hospitalGeneratePaymentHistory',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await verifyDonationPaymentRoute(formData)

            console.log(data)
            navigate('/dashboard', { replace: true })
            toast.success('Payment verified successfully.')

            return null
        } catch (error) {
            console.log(error)
            toast.error('An error occured while generating payment record.')
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


export const hospitalFetchInventoryItemRecord = createAsyncThunk(
    'hospital/hospitalFetchInventoryItemRecord',
    async ({ bloodGroup }, { rejectWithValue }) => {
        try {
            const { data } = await fetchInventoryItemRecordRoute(bloodGroup)

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