// Redux
import { combineReducers } from "redux"

// Reducers
import filterReducer from 'components/InputFilter/filterSlice'
import paginationSlice from 'components/Pagination/paginationSlice'
import productSlice from 'components/Product/productSlice'

const rootReducer = combineReducers({
    filter: filterReducer,
    pagination: paginationSlice,
    product: productSlice,
})

export default rootReducer