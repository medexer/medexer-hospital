import { createSlice } from '@reduxjs/toolkit'


const hospitalSlice = createSlice({
    name: 'hospital',
    initialState: {
        userLoading: false,
        userRequestStatus: null,
    },
    extraReducers: {
        
    }
})


export default hospitalSlice.reducer;