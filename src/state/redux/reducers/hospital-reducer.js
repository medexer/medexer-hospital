import { createSlice } from '@reduxjs/toolkit'

import { hospitalFetchAppointments, hospitalFetchDonorDonationHistory, hospitalFetchInventory, hospitalFetchInventoryItemHistory, hospitalRescheduleAppointment, hospitalResetStateProperty, hospitalUpdateInventoryItemUnits } from '../actions/hospital.actions'


const hospitalSlice = createSlice({
    name: 'hospital',
    initialState: {
        appointments: null,
        complaintThread: null,
        currentAppointment: null,
        currentComplaint: null,
        currentInventoryItem: null,
        complaintStatusUpdate: null,
        donationHistory: null,
        inventoryItems: null,
        inventoryItemHistory: null,
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

        builder.addCase(hospitalUpdateInventoryItemUnits.pending, (state, action) => {
            state.hospitalLoading = true
        })
        builder.addCase(hospitalUpdateInventoryItemUnits.fulfilled, (state, action) => {
            state.hospitalLoading = false
            const index = state.inventoryItems.findIndex(item => item.id === action.payload.id)
            state.inventoryItems[index] = action.payload
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
        })
        builder.addCase(hospitalResetStateProperty.rejected, (state, action) => {
            state.hospitalLoading = false
        })
    }
})


export default hospitalSlice.reducer;