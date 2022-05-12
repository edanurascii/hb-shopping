import { configureStore } from '@reduxjs/toolkit'

// Reducers
import filterReducer from 'components/Filter/filterSlice'
import productSlice from 'components/Product/productSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        product: productSlice
    }
})