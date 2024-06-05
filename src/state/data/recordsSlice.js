import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../../api/constant';

export const fetchRecords = createAsyncThunk('records/fetchRecords', async () => {
    const response = await api.get(`/records`)
    return response.data;
  });

export const uploadRecords = createAsyncThunk('records/uploadRcords', async (data) => {
  console.log(data)
    const response = await api.post(`/records`,{...data})
    return response.data;
  });

  const parseDate = (dateString) => {
    return new Date(dateString);
  };


  const typeArray = ['TH-MM', 'MM-TH', "AIR CARGO",'MM-SGA','CAR RENTAL'];

  const recordslice = createSlice({
    name: 'records',
    initialState: {allRecords:[],currentUserRecords:[],voucherNumber:1,loading:false,error:null,totalIncome: 0,individualIncome: {
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
        // console.log(action.payload) 
        return state = {...state,currentUserRecords:[...action.payload]}
      },

      updateVoucherNumber: (state) => {
        // console.log(state.voucherNumber)
      return state = {...state,voucherNumber: state.voucherNumber + 1}
       
      },

      calculateIndividualIncome: (state) => {
        let newState = {...state.individualIncome}
        let newPercentState = {...state.individualIncomePercentage}

      if(state.allRecords) {
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
          
            // console.log(state.allRecords)
            // console.log(action.payload)

            if(state.allRecords.length !== 0) {
              state.voucherNumber = state.allRecords[state.allRecords.length - 1].voucherNumber + 1
          
            }else {
              state.voucherNumber = 1
            }

            if(localStorage.getItem('currentRole')){

              if(localStorage.getItem('currentRole') === 'admin') {

                const fitlerWithCurrentUser = state.allRecords
              
                state.currentUserRecords = fitlerWithCurrentUser

              
                state.currentUserRecords = fitlerWithCurrentUser
              }else{
                const fitlerWithCurrentUser = state.allRecords.filter((record) => record.userIssued === localStorage.getItem('currentUsername'))
              
                state.currentUserRecords = fitlerWithCurrentUser

              }
            }

          const totalIncomeFromFetchData = state.allRecords.reduce((prev, currentValue) => {
          const numericValue = parseFloat(
            currentValue.totalMMK.replace(/[^0-9.-]+/g, "")
          );
          return prev + (isNaN(numericValue) ? 0 : numericValue);
          }, 0);

          state.totalIncome = totalIncomeFromFetchData

          })
          .addCase(fetchRecords.rejected, (state, action) => {
            
            state.loading = false;
            state.error = action.error.message;
          })

          .addCase(uploadRecords.fulfilled, (state, action) => {
            state.loading = false;
            state.allRecords = [...state.allRecords,action.payload]
            
          
          
          })
        }

  })

  export const {upadateCurrentUserRecords,updateVoucherNumber,calculateIndividualIncome} = recordslice.actions

  export default recordslice.reducer;