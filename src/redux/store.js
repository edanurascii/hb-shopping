import { configureStore } from '@reduxjs/toolkit'

// Reducers
import filterReducer from 'components/Filter/filterSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
    }
})