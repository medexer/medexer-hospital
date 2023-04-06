import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/auth.reducer'
import hospitalReducer from './reducers/hospital-reducer'

export default configureStore({
    reducer: {
        auth: authReducer,        
        hospital: hospitalReducer,
    }
})