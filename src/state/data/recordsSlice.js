import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../../api/constant';
import { act } from 'react-dom/test-utils';

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


  const typeArray = ['TH-MM', 'MM-TH', "AIR CARGO",'MM-SGA','CAR RENTAL'];

  const recordslice = createSlice({
    name: 'records',
    initialState: {allRecords:[],currentUserRecords:[],voucherNumber:null,loading:false,error:null,individualIncome: {
      mm_th: 0,
      th_mm: 0,
      airCargo: 0,
      mm_sga: 0,
      carRental: 0
    }},
    reducers:{

      upadateCurrentUserRecords:(state,action) => {
        // console.log(action.payload) x x
        return state = {...state,currentUserRecords:[...action.payload]}
      },

      updateVoucherNumber: (state) => {
        return state = {...state,voucherNumber: state.voucherNumber + 1}
      },

      calculateIndividualIncome: (state) => {
       typeArray.map((type) => {
        const filteredArray = state.allRecords.filter((record) => record.type === type);

        const totalIncomeByType = filteredArray.reduce((prev, currentValue) => {
          const numericValue = parseFloat(
            currentValue.totalMMK.replace(/[^0-9.-]+/g, "")
          );
          return prev + (isNaN(numericValue) ? 0 : numericValue);
        }, 0);
    
        // console.log(totalIncomeByType);

        if(type === 'TH-MM'){
          let newState = {...state.individualIncome}
          newState = {...newState,th_mm: totalIncomeByType }
          console.log(newState)
          return state = {...state,individualIncome: {...newState}}
        }


       })
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
           
            if(action.payload.length !== 0) {
              state.voucherNumber = action.payload[action.payload.length - 1].voucherNumber + 1
              // console.log(state.voucherNumber)
            }else {
              state.voucherNumber = 1
            }

            if(localStorage.getItem('currentUsername')){

              if(localStorage.getItem('currentUsername') === 'adminJK') {

                console.log('hello')
                const fitlerWithCurrentUser = state.allRecords
                console.log(fitlerWithCurrentUser)
                state.currentUserRecords = fitlerWithCurrentUser


                // console.log(fitlerWithCurrentUser)
                state.currentUserRecords = fitlerWithCurrentUser
              }else{
                const fitlerWithCurrentUser = state.allRecords.filter((record) => record.userIssued === localStorage.getItem('currentUsername'))
                // console.log(fitlerWithCurrentUser)
                state.currentUserRecords = fitlerWithCurrentUser

              }
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

  export const {upadateCurrentUserRecords,updateVoucherNumber,calculateIndividualIncome} = recordslice.actions

  export default recordslice.reducer;