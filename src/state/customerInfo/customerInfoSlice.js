import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: 'customerInfo',
    initialState: {customer_name:'',customer_phone:'',customer_address:''},
    reducers: {
       updateCustomerInfo: (state,action) => {
        switch (action.payload.type) {
            case 'name' : {
                state = {...state,customer_name: action.payload.value}

                break;
            }
            case 'phone' : {
                state = {...state,customer_phone: action.payload.value}
                break;
            }
            case 'address' : {
                state = {...state,customer_address: action.payload.value}
                break;
            }

            default: {
                return
            }
        }
        return state
       }
    }
})

export const {updateCustomerInfo} = customerSlice.actions;
export default customerSlice.reducer;
