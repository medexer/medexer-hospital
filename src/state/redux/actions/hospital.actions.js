import { createAsyncThunk } from "@reduxjs/toolkit"


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