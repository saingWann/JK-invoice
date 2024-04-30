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
    initialState: {allRecords:[],currentUserRecords:[],voucherNumber:null,loading:false,error:null,totalIncome: 0,individualIncome: {
      mm_th: 0,
      th_mm: 0,
      airCargo: 0,
      mm_sga: 0,
      carRental: 0
    } ,individualIncomePercentage: {
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
        let newState = {...state.individualIncome}
        let newPercentState = {...state.individualIncomePercentage}

      if(state.allRecords.length !==0) {
        typeArray.map((type) => {
          const filteredArray = state.allRecords.filter((record) => record.type === type);
  
          const totalIncomeByType = filteredArray.reduce((prev, currentValue) => {
            const numericValue = parseFloat(
              currentValue.totalMMK.replace(/[^0-9.-]+/g, "")
            );
            return prev + (isNaN(numericValue) ? 0 : numericValue);
          }, 0);
      
  
          if(type === 'TH-MM'){
            const percent = (100 * totalIncomeByType) / state.totalIncome
            newState = {...newState,th_mm: totalIncomeByType }
            newPercentState = {...newPercentState,th_mm: percent.toFixed(2)}
            // console.log(percent.toFixed(2))
            state = {...state,individualIncome: {...newState} , individualIncomePercentage: {...newPercentState}}

          }else if( type === 'MM-TH'){
            const percent = (100 * totalIncomeByType) / state.totalIncome
            newState = {...newState,mm_th: totalIncomeByType }
             newPercentState = {...newPercentState,mm_th: percent.toFixed(2)}
            // console.log(percent.toFixed(2))
            state = {...state,individualIncome: {...newState} , individualIncomePercentage: {...newPercentState}}

          }else if( type === 'AIR CARGO'){
            const percent = (100 * totalIncomeByType) / state.totalIncome
            newState = {...newState,airCargo: totalIncomeByType }
            newPercentState = {...newPercentState,airCargo: percent.toFixed(2)}
            // console.log(percent.toFixed(2))
            state = {...state,individualIncome: {...newState} , individualIncomePercentage: {...newPercentState}}

          }else if( type === 'MM-SGA'){
            const percent = (100 * totalIncomeByType) / state.totalIncome
            newState = {...newState,mm_sga: totalIncomeByType }
            newPercentState = {...newPercentState,mm_sga: percent.toFixed(2)}
            // console.log(percent.toFixed(2))
            state = {...state,individualIncome: {...newState} , individualIncomePercentage: {...newPercentState}}

          }else if( type === 'CAR RENTAL'){
            const percent = (100 * totalIncomeByType) / state.totalIncome
            newState = {...newState,carRental: totalIncomeByType }
             newPercentState = {...newPercentState,carRental: percent.toFixed(2)}
            // console.log(percent.toFixed(2))
            state = {...state,individualIncome: {...newState} , individualIncomePercentage: {...newPercentState}}
          }
  
        })
      }
      // console.log(state.individualIncome)
      return state
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
          
            // get the last voucher number
            if(action.payload.length !== 0) {
              state.voucherNumber = action.payload[action.payload.length - 1].voucherNumber + 1
              // console.log(state.voucherNumber)
            }else {
              state.voucherNumber = 1
            }

            if(localStorage.getItem('currentUsername')){

              if(localStorage.getItem('currentUsername') === 'adminJK') {

                // console.log('hello')
                const fitlerWithCurrentUser = state.allRecords
                // console.log(fitlerWithCurrentUser)
                state.currentUserRecords = fitlerWithCurrentUser

                // console.log(fitlerWithCurrentUser)
                state.currentUserRecords = fitlerWithCurrentUser
              }else{
                const fitlerWithCurrentUser = state.allRecords.filter((record) => record.userIssued === localStorage.getItem('currentUsername'))
                // console.log(fitlerWithCurrentUser)
                state.currentUserRecords = fitlerWithCurrentUser

              }
            }

          const totalIncomeFromFetchData = state.allRecords.reduce((prev, currentValue) => {
          const numericValue = parseFloat(
            currentValue.totalMMK.replace(/[^0-9.-]+/g, "")
          );
          return prev + (isNaN(numericValue) ? 0 : numericValue);
          }, 0);

          // console.log(totalIncomeFromFetchData)
          state.totalIncome = totalIncomeFromFetchData

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