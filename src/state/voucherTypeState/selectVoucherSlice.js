import {createSlice} from '@reduxjs/toolkit'

const selectVoucherType = createSlice({
    name: 'voucherType',
    initialState: 'THAI - MYANMAR',
    reducers: {
        setVoucher: (state,actions) => {
            return state = actions.payload
        }
    }
})

export const {setVoucher} = selectVoucherType.actions
export default selectVoucherType.reducer