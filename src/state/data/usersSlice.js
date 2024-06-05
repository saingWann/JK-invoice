import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../../api/constant';

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    const response = await api.get(`/users`);
    return response.data;
  });

export const updateUserInfo = createAsyncThunk('users/updateUserInfo', async (action) => {
  // console.log(action)
    const response = await api.put(`/users/${action.id}`,{...action});
    return response.data;
  });
export const addNewUser = createAsyncThunk('users/addNewUser', async (action) => {
  // console.log(action)
    const response = await api.post(`/users`,{...action});
    return response.data;
  });
export const deleteUser = createAsyncThunk('users/deleteUser', async (action) => {
  // console.log(action)
    const response = await api.delete(`/users/${action.idToDelete}`,);
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

          .addCase(addNewUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(addNewUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.allUsers = [...state.allUsers,{...action.payload, id: 'jk' + action.payload.id}]

          })


          .addCase(fetchAllUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(updateUserInfo.pending, (state) => {
            state.loading = true;
          })
          .addCase(updateUserInfo.fulfilled, (state, action) => { 
        
            const userToUpdate = state.allUsers.map((user) => {
              if(user.id === action.payload.id) {
                return user = {...user,userName: action.payload.userName, passWord: action.payload.passWord}
              }
              return user;
            })
            // console.log(userToUpdate)
             state = {...state, allUsers: [
              ...userToUpdate
            ]}
          })
          .addCase(deleteUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(deleteUser.fulfilled, (state, action) => { 
        
            const userToUpdate = state.allUsers.filter((user) => user.id !== action.idToDelete )
            // console.log(userToUpdate)
             state = {...state, allUsers: [
              ...userToUpdate
            ]}
          })
          
        }

  })

  export const {setCurrentUser} = userSlice.actions

  export default userSlice.reducer;