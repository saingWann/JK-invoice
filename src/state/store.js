import { configureStore } from '@reduxjs/toolkit'
import addNewTableRow  from './TabelRowSlice'
import calculateAmountSlice from './calculateAmountSlice'
import selectVoucherSlice from './voucherTypeState/selectVoucherSlice'
import mmThCalculateAmountSlice from './mm-th-calculateAmount/mm-th-calculate-amount-slice'

export const store = configureStore({
    reducer: {
        addRow : addNewTableRow,
        cost: calculateAmountSlice,
        voucherType: selectVoucherSlice,
        mm_th_cost: mmThCalculateAmountSlice,
    }
})