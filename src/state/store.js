import { configureStore } from '@reduxjs/toolkit'
import addNewTableRow  from './TabelRowSlice'
import calculateAmountSlice from './calculateAmountSlice'

export const store = configureStore({
    reducer: {
        addRow : addNewTableRow,
        cost: calculateAmountSlice
    }
})