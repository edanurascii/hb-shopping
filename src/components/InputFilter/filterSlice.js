import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredValue: '',
    filterCriteria: '',
    filterBy: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filteredValue = action.payload
        },
        setFilteredCriteria: (state, action) => {
            state.filterCriteria = action.payload
        },
        setFilterBy: (state, action) => {
            state.filterBy = action.payload
        }
    },
})

export const {
    filter,
    setFilteredCriteria,
    setFilterBy
} = filterSlice.actions

export default filterSlice.reducer