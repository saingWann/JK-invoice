import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../../api/constant';

export const fetchRecords = createAsyncThunk('records/fetchRecords', async () => {
    const response = await api.get(`/records`)
    return response.data;
  });

export const uploadRecords = createAsyncThunk('records/uploadRcords', async (data) => {
  console.log('22')
  console.log(data)
    const response = await api.post(`/records`,{...data})
    return response.data;
  });


  const recordslice = createSlice({
    name: 'records',
    initialState: {allRecords:[],currentUserRecords:[],loading:false,error:null},
    reducers:{

      upadateCurrentUserRecords:(state,action) => {
        return state = {...state,currentUserRecords:[...action.payload]}
      }
   
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchRecords.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchRecords.fulfilled, (state, action) => {

            state.loading = false;
            state.allRecords = action.payload

            if(localStorage.getItem('currentUsername')){
                const fitlerWithCurrentUser = state.allRecords.filter((record) => record.userIssued === localStorage.getItem('currentUsername'))
                console.log(fitlerWithCurrentUser)
                state.currentUserRecords = fitlerWithCurrentUser
            }
          
          })
          .addCase(fetchRecords.rejected, (state, action) => {
            
            state.loading = false;
            state.error = action.error.message;
          })

          .addCase(uploadRecords.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.allRecords = action.payload
          
          })
        }

  })

  export const {upadateCurrentUserRecords} = recordslice.actions

  export default recordslice.reducer;