import { configureStore } from '@reduxjs/toolkit'
import addNewTableRow  from './TabelRowSlice'
import calculateAmountSlice from './calculateAmountSlice'
import selectVoucherSlice from './voucherTypeState/selectVoucherSlice'

export const store = configureStore({
    reducer: {
        addRow : addNewTableRow,
        cost: calculateAmountSlice,
        voucherType: selectVoucherSlice,
    }
})