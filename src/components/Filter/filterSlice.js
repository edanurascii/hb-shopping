import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredValue: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filteredValue = action.payload
        }
    },
})

export const { filter } = filterSlice.actions

export default filterSlice.reducer