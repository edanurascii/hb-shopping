import { configureStore } from '@reduxjs/toolkit'

// Reducers
import filterReducer from 'components/InputFilter/filterSlice'
import paginationSlice from 'components/Pagination/paginationSlice'
import productSlice from 'components/Product/productSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        product: productSlice,
        pagination: paginationSlice
    }
})