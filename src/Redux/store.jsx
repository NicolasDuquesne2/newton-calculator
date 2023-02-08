import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './Language/languageSlice'

const store = configureStore({
    reducer: {
        language: languageSlice
    }
})

export default store