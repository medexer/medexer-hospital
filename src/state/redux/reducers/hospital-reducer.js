import { createSlice } from '@reduxjs/toolkit'

import { hospitalResetStateProperty } from '../actions/hospital.actions'


const hospitalSlice = createSlice({
    name: 'hospital',
    initialState: {
        currentAppointment: null,
        currentInventoryItem: null,
        hospitalLoading: false,
        hospitalRequestStatus: null,
    },
    extraReducers: (builder) => {
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
        })
        builder.addCase(hospitalResetStateProperty.rejected, (state, action) => {
            state.hospitalLoading = false
        })
    }
})


export default hospitalSlice.reducer;