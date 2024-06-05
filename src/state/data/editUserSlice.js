import { createSlice } from "@reduxjs/toolkit";

const userEditSlice = createSlice({
    name: 'userToEdit',
    initialState: '',
    reducers: {
       setUserToEdit: (state,actions) => {
        // console.log(state.length)
        // console.log(actions.payload,'this is from the payload')
        return state = actions.payload
       }
    }
})

export const {setUserToEdit} = userEditSlice.actions
export default userEditSlice.reducer