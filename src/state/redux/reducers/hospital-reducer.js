import { createSlice } from '@reduxjs/toolkit'

import { hospitalFetchAppointments, hospitalFetchComplaints, hospitalFetchComplaintThread, hospitalFetchDonorDonationHistory, hospitalFetchInventory, hospitalFetchInventoryItemHistory, hospitalFetchInventoryItemRecord, hospitalFetchNotifications, hospitalGenerateComplaint, hospitalGeneratePaymentHistory, hospitalInitializePayment, hospitalProcessDonation, hospitalReplyComplaintThread, hospitalRescheduleAppointment, hospitalResetStateProperty, hospitalUpdateComplaintStatus, hospitalUpdateInventoryItemUnits, hospitalUpdateNotification, hospitalVerifyPayment } from '../actions/hospital.actions'


const hospitalSlice = createSlice({
    name: 'hospital',
    initialState: {
        appointments: null,
        complaints: null,
        complaintThread: null,
        currentAppointment: null,
        currentComplaint: null,
        currentInventoryItem: null,
        complaintStatusUpdate: null,
        donationHistory: null,
        currentNotification: null,
        inventoryItems: null,
        inventoryItemRecord: null,
        inventoryItemHistory: null,
        notifications: null,
        paymentConfiguration: null,
        paymentVerification: null,
        hospitalLoading: false,
        hospitalRequestStatus: null,
    },
    extraReducers: (builder) => {
        builder.addCase(hospitalFetchAppointments.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchAppointments.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.appointments = action.payload
        })
        builder.addCase(hospitalFetchAppointments.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalRescheduleAppointment.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalRescheduleAppointment.fulfilled, (state, action) => {
            state.hospitalLoading = false
            const index = state.appointments.findIndex(appointment => appointment.id === action.payload.id)
            state.appointments[index] = action.payload
        })
        builder.addCase(hospitalRescheduleAppointment.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalProcessDonation.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalProcessDonation.fulfilled, (state, action) => {
            state.hospitalLoading = false
            const index = state.appointments.findIndex(appointment => appointment.id === action.payload.id)
            state.appointments[index] = action.payload
        })
        builder.addCase(hospitalProcessDonation.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalInitializePayment.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalInitializePayment.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.paymentConfiguration = action.payload
        })
        builder.addCase(hospitalInitializePayment.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalVerifyPayment.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalVerifyPayment.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.paymentVerification = action.payload
        })
        builder.addCase(hospitalVerifyPayment.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalGeneratePaymentHistory.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalGeneratePaymentHistory.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.paymentVerification = null
        })
        builder.addCase(hospitalGeneratePaymentHistory.rejected, (state, action) => {
            state.hospitalLoading = false
        })



        builder.addCase(hospitalFetchDonorDonationHistory.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchDonorDonationHistory.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.donationHistory = action.payload
        })
        builder.addCase(hospitalFetchDonorDonationHistory.rejected, (state, action) => {
            state.hospitalLoading = false
        })



        builder.addCase(hospitalFetchInventory.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchInventory.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.inventoryItems = action.payload
        })
        builder.addCase(hospitalFetchInventory.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalFetchInventoryItemRecord.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchInventoryItemRecord.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.inventoryItemRecord = action.payload
        })
        builder.addCase(hospitalFetchInventoryItemRecord.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalUpdateInventoryItemUnits.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalUpdateInventoryItemUnits.fulfilled, (state, action) => {
            state.hospitalLoading = false
            const index = state.inventoryItemRecord.findIndex(item => item.pkid === action.payload.pkid)
            state.inventoryItemRecord[index] = action.payload
        })
        builder.addCase(hospitalUpdateInventoryItemUnits.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalFetchInventoryItemHistory.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchInventoryItemHistory.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.inventoryItemHistory = action.payload
        })
        builder.addCase(hospitalFetchInventoryItemHistory.rejected, (state, action) => {
            state.hospitalLoading = false
        })



        builder.addCase(hospitalFetchComplaints.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchComplaints.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.complaints = action.payload
        })
        builder.addCase(hospitalFetchComplaints.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalFetchComplaintThread.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchComplaintThread.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.complaintThread = action.payload
        })
        builder.addCase(hospitalFetchComplaintThread.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalGenerateComplaint.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalGenerateComplaint.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.complaints = [action.payload, ...state.complaints]
        })
        builder.addCase(hospitalGenerateComplaint.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalUpdateComplaintStatus.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalUpdateComplaintStatus.fulfilled, (state, action) => {
            state.hospitalLoading = false
            const index = state.complaints.findIndex(complaint => complaint.pkid === action.payload.pkid)
            state.complaints[index] = action.payload
            state.currentComplaint = action.payload
        })
        builder.addCase(hospitalUpdateComplaintStatus.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalReplyComplaintThread.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalReplyComplaintThread.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.complaintThread = [action.payload, ...state.complaintThread]
        })
        builder.addCase(hospitalReplyComplaintThread.rejected, (state, action) => {
            state.hospitalLoading = false
        })



        builder.addCase(hospitalFetchNotifications.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchNotifications.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.notifications = action.payload
        })
        builder.addCase(hospitalFetchNotifications.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalUpdateNotification.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalUpdateNotification.fulfilled, (state, action) => {
            state.hospitalLoading = false
            const index = state.notifications.findIndex(notification => notification.pkid === action.payload.pkid)
            state.notifications[index] = action.payload
        })
        builder.addCase(hospitalUpdateNotification.rejected, (state, action) => {
            state.hospitalLoading = false
        })



        builder.addCase(hospitalResetStateProperty.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalResetStateProperty.fulfilled, (state, action) => {
            state.hospitalLoading = false
            if (action.payload.key === 'Appointment') {
                state.currentAppointment = action.payload.data
            }
            if (action.payload.key === 'InventoryItem') {
                state.currentInventoryItem = action.payload.data
            }
            if (action.payload.key === 'CurrentComplaint') {
                state.currentComplaint = action.payload.data
            }
            if (action.payload.key === 'CurrentNotification') {
                state.currentNotification = action.payload.data
            }
        })
        builder.addCase(hospitalResetStateProperty.rejected, (state, action) => {
            state.hospitalLoading = false
        })
    }
})


export default hospitalSlice.reducer;