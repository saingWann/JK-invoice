import { configureStore } from '@reduxjs/toolkit'
import addNewTableRow  from './TabelRowSlice'
import calculateAmountSlice from './calculateAmountSlice'
import selectVoucherSlice from './voucherTypeState/selectVoucherSlice'
import mmThCalculateAmountSlice from './mm-th-calculateAmount/mm-th-calculate-amount-slice'
import ac_calculateAmount from './ac-calculateAmount/ac_calculateAmount'
import usersSlice from './data/usersSlice'
import CategoriesSlice from './categories/CategoriesSlice'
import recordsSlice from './data/recordsSlice'
import customerInfoSlice from './customerInfo/customerInfoSlice'

export const store = configureStore({
    reducer: {
        addRow : addNewTableRow,
        customerInfo: customerInfoSlice,
        cost: calculateAmountSlice,
        voucherType: selectVoucherSlice,
        mm_th_cost: mmThCalculateAmountSlice,
        ac_cost : ac_calculateAmount,
        allUsers: usersSlice,
        categories: CategoriesSlice,
        allRecords: recordsSlice,
    }
})