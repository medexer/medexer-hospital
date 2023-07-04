import { createSlice } from '@reduxjs/toolkit'

import { hospitalAddDonorMedicalHistory, hospitalFetchAppointments, hospitalFetchComplaints, hospitalFetchComplaintThread, hospitalFetchDonorDonationHistory, hospitalFetchDonorMedicalHistory, hospitalFetchInventory, hospitalFetchInventoryItemHistory, hospitalFetchInventoryItemRecord, hospitalFetchMedicalHistoryDonors, hospitalFetchNotifications, hospitalFetchRecentDonorAppointments, hospitalGenerateComplaint, hospitalGeneratePaymentHistory, hospitalInitializePayment, hospitalProcessDonation, hospitalReplyComplaintThread, hospitalRescheduleAppointment, hospitalResetStateProperty, hospitalSearchDonors, hospitalUpdateComplaintStatus, hospitalUpdateInventoryItemUnits, hospitalUpdateNotification, hospitalVerifyPayment } from '../actions/hospital.actions'


const hospitalSlice = createSlice({
    name: 'hospital',
    initialState: {
        appointments: null,
        complaints: null,
        complaintThread: null,
        currentDonor: null,
        donors: null,
        currentAppointment: null,
        currentComplaint: null,
        currentDonorProfile: null,
        currentMedicalHistory: null,
        currentInventoryItem: null,
        complaintStatusUpdate: null,
        donationHistory: null,
        currentNotification: null,
        inventoryItems: null,
        inventoryItemRecord: null,
        inventoryItemHistory: null,
        medicalHistory: null,
        notifications: null,
        searchResults: null,
        paymentConfiguration: null,
        paymentVerification: null,
        recentAppointments: null,
        hospitalLoading: false,
        hospitalRequestStatus: null,
    },
    extraReducers: (builder) => {
        builder.addCase(hospitalSearchDonors.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalSearchDonors.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.searchResults = action.payload
        })
        builder.addCase(hospitalSearchDonors.rejected, (state, action) => {
            state.hospitalLoading = false
        })



        builder.addCase(hospitalFetchMedicalHistoryDonors.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchMedicalHistoryDonors.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.donors = action.payload
        })
        builder.addCase(hospitalFetchMedicalHistoryDonors.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalFetchDonorMedicalHistory.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchDonorMedicalHistory.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.medicalHistory = action.payload
        })
        builder.addCase(hospitalFetchDonorMedicalHistory.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalFetchRecentDonorAppointments.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalFetchRecentDonorAppointments.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.recentAppointments = action.payload
        })
        builder.addCase(hospitalFetchRecentDonorAppointments.rejected, (state, action) => {
            state.hospitalLoading = false
        })

        builder.addCase(hospitalAddDonorMedicalHistory.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalAddDonorMedicalHistory.fulfilled, (state, action) => {
            state.hospitalLoading = false
            state.medicalHistory = [action.payload, ...state.medicalHistory]
        })
        builder.addCase(hospitalAddDonorMedicalHistory.rejected, (state, action) => {
            state.hospitalLoading = false
        })



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
            // const index = state.inventoryItemRecord.findIndex(item => item.pkid === action.payload.pkid)
            // state.inventoryItemRecord[index] = action.payload
            state.inventoryItemRecord = state.inventoryItemRecord.filter(item => item.pkid !== action.payload.pkid)
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
            if (action.payload.key === 'DonorProfile') {
                state.currentDonorProfile = action.payload.data
            }
            if (action.payload.key === 'MedicalHistory') {
                state.currentMedicalHistory = action.payload.data
            }
            if (action.payload.key === 'InventoryItem') {
                state.currentInventoryItem = action.payload.data
            }
            if (action.payload.key === 'CurrentComplaint') {
                state.currentComplaint = action.payload.data
            }
            if (action.payload.key === 'CurrentDonor') {
                state.currentDonor = action.payload.data
            }
            if (action.payload.key === 'CurrentNotification') {
                state.currentNotification = action.payload.data
            }
            if (action.payload.key === 'Reset-Search-Results') {
                state.searchResults = action.payload.data
            }
        })
        builder.addCase(hospitalResetStateProperty.rejected, (state, action) => {
            state.hospitalLoading = false
        })
    }
})


export default hospitalSlice.reducer;