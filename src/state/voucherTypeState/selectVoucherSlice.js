import {createSlice} from '@reduxjs/toolkit'

const selectVoucherType = createSlice({
    name: 'voucherType',
    initialState: 'MYANMAR - THAI',
    reducers: {
        setVoucher: (state,actions) => {
            console.log(actions.payload)
            return state = actions.payload
        }
    }
})

export const {setVoucher} = selectVoucherType.actions
export default selectVoucherType.reducer