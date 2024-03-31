import { configureStore } from '@reduxjs/toolkit'
import addNewTableRow  from './TabelRowSlice'

export const store = configureStore({
    reducer: {
        addRow : addNewTableRow
    }
})