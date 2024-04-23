import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../../api/constant';

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    const response = await api.get(`/users`);
    return response.data;
  });


  const userSlice = createSlice({
    name: 'users',
    initialState: {allUsers: [] ,loading: false, error: null , currentUser: {}},
    reducers:{

      setCurrentUser:(state,action) => {
        return state = {...state,currentUser: {...action.payload}
      }}
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllUsers.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.allUsers = action.payload

            if(localStorage.getItem('auth')){
              state.currentUser = state.allUsers.filter((user) => (user.token === JSON.parse(localStorage.getItem('auth'))))[0]
              
            }
          
          })
          .addCase(fetchAllUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
        }

  })

  export const {setCurrentUser} = userSlice.actions

  export default userSlice.reducer;