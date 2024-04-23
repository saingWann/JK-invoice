import { createSlice } from "@reduxjs/toolkit";

const acData = {AC_weight : '',AC_pricePerWeight: '',AC_totalAmountOfWeight_THB:'',AC_totalTHB:'',AC_deliFee: '',AC_exchangeRate: '',AC_totalAmountInMMK: '',AC_grandTotal:'',AC_grandBalance:'',AC_advanced:'',AC_pickupFee: '',AC_receiverInfo: {
    name: '',
    phone: '',
    address: ''
}
}

export const ac_calculateSlice = createSlice({
    name: 'airCargo',
    initialState: acData,
    reducers: {
        AC_updateData : (state,actions) => {
            
            switch(actions.payload.type) {

                case 'weight' : {
                    state = {...state,AC_weight: actions.payload.value}
                    break;
                }

                case 'deliFee' : {

                    state = {...state,AC_deliFee: actions.payload.value}
                    
                    break;
                }

                case 'exchangeRate' : {
                    state = {...state,AC_exchangeRate: actions.payload.value}
                    break;
                }
                case 'pickupFee' : {
                    state = {...state,AC_pickupFee: actions.payload.value}
                    break;
                }
                case 'advanced' : {

                    state = {...state,AC_advanced: actions.payload.value}
                    break;
                }
            }
            return state;
        },

        AC_handleUnitOnBlur : (state,actions) => {

            switch (actions.payload) {

                case 'weight' : {
                    if(state.AC_weight) {
                        state = {...state,AC_weight: state.AC_weight + ' KG'}
                        break;
                    }
                    return
                }

                case 'deliFee' : {

                    if(state.AC_deliFee) {
                        state = {...state,AC_deliFee: state.AC_deliFee + ' THB'}
                        break;
                    }
                    
                }
                case 'exchangeRate' : {

                    if(state.AC_exchangeRate) {
                        state = {...state,AC_exchangeRate: state.AC_exchangeRate + ' MMK'}
                        break;
                    }
                    
                }

                case 'pickupFee' : {

                    if(state.AC_pickupFee) {

                        const pickup = parseInt(state.AC_pickupFee)

                        state = {...state,AC_pickupFee: pickup.toLocaleString() + ' MMK'}
                        break;
                    }
                    
                }
                
                case 'advanced' : {

                    if(state.AC_advanced) {
                        const advan = parseInt(state.AC_advanced)

                        state = {...state,AC_advanced: advan.toLocaleString() + ' MMK'}
                        break;
                    }
                    
                }

               

                case 'allTHB' : {

                    if(state.AC_deliFee && state.AC_totalAmountOfWeight_THB) {

                        const totalTHBWithNoComa = state.AC_totalAmountOfWeight_THB.replace(/,/g,'')
                        const totalTHBinNumberType = Number(totalTHBWithNoComa.match(/(\d+)/)[0])

                        const deli = Number(state.AC_deliFee.match(/(\d+)/)[0])

                        const allTHB = totalTHBinNumberType + deli

                        return state = {...state,AC_totalTHB: allTHB.toLocaleString() + ' THB'}
                        

                    }else {
                        return state = {...state,AC_totalTHB: state.AC_totalAmountOfWeight_THB}
                    }
                }
            }
            return state
        },

        AC_handlePricePerWeight: (state) => {
            if(state.AC_weight) {
                
                const weightWithNoComa = state.AC_weight.replace(/,/g, '');

                const weightInNumber = Number(weightWithNoComa.match(/(\d+)/)[0])

                if(weightInNumber <= 3 ){

                    const totalTHB = weightInNumber * 200

                    return state = {...state, AC_pricePerWeight: '200 THB', AC_totalAmountOfWeight_THB: totalTHB.toLocaleString() + ' THB'}
                }else if( weightInNumber > 3 && weightInNumber <= 5) {

                    const totalTHB = weightInNumber * 150
                    return state = {...state, AC_pricePerWeight: '150 THB', AC_totalAmountOfWeight_THB: totalTHB.toLocaleString() + ' THB'}
                }else if( weightInNumber > 5 && weightInNumber <= 10 ) {

                    const totalTHB = weightInNumber * 140
                    return state = {...state, AC_pricePerWeight: '140 THB', AC_totalAmountOfWeight_THB: totalTHB.toLocaleString() + ' THB'}
                }else {

                    const totalTHB = weightInNumber * 120
                    return state = {...state, AC_pricePerWeight: '120 THB', AC_totalAmountOfWeight_THB: totalTHB.toLocaleString() + ' THB'}
                }


            }

        },

        AC_calculateTotalAmountInMMK: (state) => {

          
            if( state.AC_totalTHB && state.AC_exchangeRate){

                const allTHBwithNoComa = state.AC_totalTHB.replace(/,/g,'')
                const allTHB = Number(allTHBwithNoComa.match(/(\d+)/)[0])
                const exchangeRateWithNoComa = state.AC_exchangeRate.replace(/,/g,'')
                const exchangeRate = Number(exchangeRateWithNoComa.match(/(\d+)/)[0])

                const totalMMK = exchangeRate * allTHB

                return state = {...state,AC_totalAmountInMMK: totalMMK.toLocaleString() + ' MMK'}

            }
        },

        AC_calculateGrandTotal: (state) => {
            if(state.AC_pickupFee && state.AC_totalAmountInMMK) {

                const pickupWithNoComa =state.AC_pickupFee.replace(/,/g,'')
                const pickupFee = Number(pickupWithNoComa.match(/(\d+)/)[0]) 
                const totalMMKwithNoComa =state.AC_totalAmountInMMK.replace(/,/g,'')
                const totalMMK = Number(totalMMKwithNoComa.match(/(\d+)/)[0]) 

                const grandTotal = totalMMK + pickupFee

                return state = {...state,AC_grandTotal: grandTotal.toLocaleString() + ' MMK'}
            }else {
                return state = {...state,AC_grandTotal: state.AC_totalAmountInMMK}
            }
        },

        AC_calculateGrandBalance:(state) => {
            if(state.AC_grandTotal && state.AC_advanced) {
                const grandTotalWithNoComa =state.AC_grandTotal.replace(/,/g,'')
                const grandTotal = Number(grandTotalWithNoComa.match(/(\d+)/)[0]) 

                const advancedWithNoComa =state.AC_advanced.replace(/,/g,'')
                const advanced = Number(advancedWithNoComa.match(/(\d+)/)[0]) 

                const grandBalance = grandTotal - advanced

                return state = {...state,AC_grandBalance: grandBalance.toLocaleString() + ' MMK'}

            } else {
                return state = {...state,AC_grandBalance: state.AC_grandTotal}

            }
        }
    }
})

export const {AC_updateData ,AC_handleUnitOnBlur,AC_handlePricePerWeight ,AC_calculateTotalAmountInMMK,AC_calculateGrandTotal, AC_calculateGrandBalance} = ac_calculateSlice.actions
export default ac_calculateSlice.reducer