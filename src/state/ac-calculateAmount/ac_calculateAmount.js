import { createSlice } from "@reduxjs/toolkit";

const acData = {AC_weight : '',AC_pricePerWeight: '',AC_totalAmountOfWeight_THB:'',AC_totalTHB:'',AC_deliFee: '',AC_exchangeRate: '',AC_totalAmountInMMK: '',AC_pickupFee: '',AC_receiverInfo: {
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
            console.log(actions)
            
            switch(actions.payload.type) {

                case 'weight' : {
                    console.log('weight')
                    state = {...state,AC_weight: actions.payload.value}
                    break;
                }

                case 'deliFee' : {
                    console.log('deliFee')

                    state = {...state,AC_deliFee: actions.payload.value}
                    
                    break;
                }

                case 'exchangeRate' : {
                    console.log('exchangerate')
                    state = {...state,AC_exchangeRate: actions.payload.value}
                    break;
                }
                case 'pickupFee' : {
                    console.log('pickupFee')

                    state = {...state,AC_pickupFee: actions.payload.value}
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

                    console.log('hello')
                    if(state.AC_pickupFee) {
                        console.log('hello')

                        const pickup = parseInt(state.AC_pickupFee)

                        state = {...state,AC_pickupFee: pickup.toLocaleString() + ' MMK'}
                        break;
                    }
                    
                }

                case 'allTHB' : {
                    if(state.AC_deliFee && state.AC_totalAmountOfWeight_THB) {
                        const totalTHBWithNoComa = state.AC_totalAmountOfWeight_THB.replace(/,/g,'')
                        const totalTHBinNumberType = Number(totalTHBWithNoComa.match(/(\d+)/)[0])

                        const deli = Number(state.AC_deliFee.match(/(\d+)/)[0])

                        const allTHB = totalTHBinNumberType + deli

                        console.log(allTHB,'hey hey ')
                        return state = {...state,AC_totalTHB: allTHB.toLocaleString() + ' THB'}
                        

                    }
                }
            }
            return state
        },

        AC_handleTotalMMK:(state) => {

            if(state.AC_exchangeRate && state.totalTHB) {
                console.log('hello')                
            }

        },

        AC_handlePricePerWeight: (state) => {
            if(state.AC_weight) {
                
                const weightWithNoComa = state.AC_weight.replace(/,/g, '');

                const weightInNumber = Number(weightWithNoComa.match(/(\d+)/)[0])

                console.log(weightInNumber)
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
            if(state.AC_exchangeRate && state.totalTHB){


            }
        }
    }
})

export const {AC_updateData ,AC_handleUnitOnBlur,AC_handlePricePerWeight ,AC_handleTotalMMK} = ac_calculateSlice.actions
export default ac_calculateSlice.reducer