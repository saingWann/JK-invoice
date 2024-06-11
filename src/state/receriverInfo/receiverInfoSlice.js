import { createSlice } from "@reduxjs/toolkit";

const receiverInfoSlice = createSlice({
    name: 'receiverInfo',
    initialState: {receiver_name:'',receiver_phone:'',receiver_address:''},
    reducers: {
        updateReceiverInfo: (state,action) => {
        switch (action.payload.type) {
            case 'name' : {
                state = {...state,receiver_name: action.payload.value}
                // console.log(action.payload)

                break;
            }
            case 'phone' : {
                state = {...state,receiver_phone: action.payload.value}
                break;
            }
            case 'address' : {
                state = {...state,receiver_address: action.payload.value}
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

export const {updateReceiverInfo} = receiverInfoSlice.actions;
export default receiverInfoSlice.reducer;
