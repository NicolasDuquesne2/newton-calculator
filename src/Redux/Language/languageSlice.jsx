import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice( {
    name: 'language',
    initialState: {
        value: '1',
    },
    reducers: {

        update: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { update } = languageSlice.actions
export default languageSlice.reducer