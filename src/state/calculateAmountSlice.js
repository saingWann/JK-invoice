import {createSlice} from '@reduxjs/toolkit'

const cost = {kg:'',pricePerKg:'',totalAmountInTHB:'',THB:'1 THB',exchangeRateMMK:'',totalAmountInMMK:'',deliveryFee:'',grandTotal:'',advanced:'',balance:''}

const calculateAmountSlice = createSlice({
    name: 'calculateAmount',
    initialState:cost,
    reducers:{

        setCost:(state,actions) => {
            // console.log(actions)
            switch (actions.payload.type){
                case 'kg': {
                 state = {...state,kg:actions.payload.value}
                 break
                }
                case 'pricePerKg': {
                    state = {...state,pricePerKg:actions.payload.value}
                    break
                }
                
                case 'totalAmountInTHB': {
                    state = {...state,totalAmountInTHB:actions.payload.value}
                    break
                }
              
                case 'exchangeRate': {
                    state = {...state,exchangeRate:actions.payload.value}
                    break
                }
                case 'exchangeRateMMK': {
                    state = {...state,exchangeRateMMK:actions.payload.value}
                    break
                }
                case 'totalAmountMMK': {
                    state = {...state,totalAmountMMK:actions.payload.value}
                    break
                }

                case 'deliveryFee': {

                    state = {...state,deliveryFee:actions.payload.value}

                    break
                }
                case 'advanced': {
                    state = {...state,advanced:actions.payload.value}
                    break
                }
                case 'total': {
                    if(!state.deliveryFee){
                        return
                    }else{

                        const kgChargeTotal = actions.payload.value.match(/(\d+)/)
                        const deli = state.deliveryFee.match(/(\d+)/)
                        
                        const total = Number(kgChargeTotal[0]) + Number(deli[0])
                        
                        console.log(total)
                        state = {...state,grandTotal:total + ' MMK'}
                        break
                    }
                }

                default : return state

            }
            return state
        },

        calcuteTotalTHB:(state) => {

            if(state.pricePerKg &&state.kg ){
                // console.log('trigger')
                const kg = state.kg.match(/(\d+)/)
                const pricePerKg = state.pricePerKg.match(/(\d+)/)
                return {...state,totalAmountInTHB: (kg[0] * pricePerKg[0]) + ' THB'}
            }

        },
        calcuteTotalMMK:(state) => {

            if( state.exchangeRateMMK && state.totalAmountInTHB){
                const xchgRate = state.exchangeRateMMK.match(/(\d+)/)
                const totalBaht = state.totalAmountInTHB.match(/(\d+)/)

                return {...state,totalAmountInMMK: ( totalBaht[0]* xchgRate[0]) + ' MMK'}
            }
        },

        calculatePricePerKg: (state) => {
            let inputKg = state.kg.match(/(\d+)/)
            const inputKgvalue = Number(inputKg[0])


            switch (true){

                case (inputKgvalue <= 10) : {
                    console.log(inputKgvalue)
                    state = {...state,pricePerKg: '50 THB'}
                    break;
                }
               
                case (inputKgvalue > 10 && inputKgvalue <= 30) :{
                    state = {...state,pricePerKg: '45 THB'}
                    break;
                }

                case (inputKgvalue > 30 && inputKgvalue <= 50) : {
                    state = {...state,pricePerKg: '40 THB'}
                    break;
                }
                case (inputKgvalue > 50 && inputKgvalue <= 100) : {
                    state = {...state,pricePerKg: '35 THB'}
                    break;
                }
                case (inputKgvalue > 100 ) : {
                    state = {...state,pricePerKg: '30 THB'}
                    break;
                }

                default :{
                    console.log(inputKgvalue)
                    return state}
            }
            return state;
        },

        calculateGrandBalance: (state) => {
            // console.log('grandBalanced')
            if(state.advanced === '' && state.grandTotal){

                const deli = state.deliveryFee.match(/(\d+)/)
                const total = state.grandTotal.match(/(\d+)/)
                return state = {...state,balance: (Number(deli[0]) + Number(total[0]) ) + ' MMK'}

            }else if(state.advanced && state.grandTotal) {

                const grandBalance =state.grandTotal.match(/(\d+)/)[0] - state.advanced.match(/(\d+)/)[0] 
                return state = {...state,balance: grandBalance + ' MMK'}
            }
            return state
        },

        handleUnit: (state,actions) => {
            
            switch(actions.payload) {

                case 'kg' : {
                    if(state.kg === ''){
                        return
                    }else {

                        state = {...state, kg: state.kg + ' KG'}
                        break
                    }
                }

                case 'pricePerKg' :{
                    
                   state = {...state, pricePerKg: state.pricePerKg + ' THB'}
                   break
                }

                case 'exchangeRateMMK' :{
                    console.log(state.exchangeRateMMK)
                    if(state.exchangeRateMMK === ''){
                        return
                    }else {

                        state = {...state, exchangeRateMMK: state.exchangeRateMMK + ' MMK'}
                        break
                    }
                }

                case 'deliveryFee' : {
                    if(state.deliveryFee === ''){
                        return
                    }else {
                        
                        state = {...state, deliveryFee: state.deliveryFee + ' MMK' }
                        break
                    }
                }
                case 'THB' : {
                    state = {...state, THB: state.THB + ' THB' }
                    break
                }
                case 'advanced' : {
                    if(state.advanced){
                        
                        state = {...state, advanced: state.advanced + ' MMK' }
                        break
                    }
                    return
                }
            }
            return state
        }
    
  

    }
})

export const {setCost, handleUnit,calcuteTotalTHB,calcuteTotalMMK ,calculateGrandBalance,calculatePricePerKg} = calculateAmountSlice.actions
export default calculateAmountSlice.reducer 