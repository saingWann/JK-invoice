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
                    console.log(actions)
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
              

                default : return state

            }
            return state
        },

        calcuteTotalTHB:(state) => {

            if(state.pricePerKg && state.kg ){

                const kg = state.kg.match(/(\d+(\.\d+)?)/)
                const pricePerKg = state.pricePerKg.match(/(\d+)/)

                const total = Math.floor(kg[0] * pricePerKg[0])
                return {...state,totalAmountInTHB: total.toLocaleString() + ' THB'}
            }else {
                return
            }

        },
        
        calcuteTotalMMK:(state) => {

            if( state.exchangeRateMMK && state.totalAmountInTHB){
                const xchgRate = state.exchangeRateMMK.match(/(\d+)/)
                const totalBahtWithNoComa = state.totalAmountInTHB.replace(/,/g, '')
                const totalBaht = totalBahtWithNoComa.match(/(\d+)/)


                const totalMMK = ( totalBaht[0] * xchgRate[0]) 
                return {...state,totalAmountInMMK:totalMMK.toLocaleString()  + ' MMK'}
            }

        },

        calculatePricePerKg: (state) => {
            
            if(state.kg){
                let inputKg = state.kg.match(/(\d+)/)
                const inputKgvalue = Number(inputKg[0])


            switch (true){

                case (inputKgvalue <= 10) : {
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
        }

            return state;
        },

        calculateGrandTotal: (state) => {

            if(state.deliveryFee){
                
                const deliWithNoComa = state.deliveryFee.replace(/,/g, '')
                const deli = deliWithNoComa.match(/(\d+)/)

                const totalWithNoComa = state.totalAmountInMMK.replace(/,/g, '')
                const total = totalWithNoComa.match(/(\d+)/)

                const Gtotal = Number(deli[0]) + Number(total[0])

                return state = {...state, grandTotal:Gtotal.toLocaleString() + ' MMK'}

            }else {

                return state = {...state, grandTotal: 
                    state.totalAmountInMMK }

            }
        },

        calculateGrandBalance: (state) => {

            if(state.advanced) {

                const advancedWithNoComa = state.advanced.replace(/,/g, '')
                const advan = advancedWithNoComa.match(/(\d+)/)
                const totalWithNoComa = state.grandTotal.replace(/,/g, '')
                const total = totalWithNoComa.match(/(\d+)/)

                const grandBalance =  total[0] - advan[0]
              

                return state = {...state, balance: grandBalance.toLocaleString() + ' MMK'}
                
            }else {
               
                return state = {...state, balance: state.grandTotal }
            }
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
                        
                        state = {...state, deliveryFee: Number(state.deliveryFee).toLocaleString() + ' MMK' }
                        break
                    }
                }
                case 'THB' : {
                    state = {...state, THB: state.THB + ' THB' }
                    break
                }
                case 'advanced' : {
                    if(state.advanced){
                        
                        state = {...state, advanced: state.advanced.toLocaleString() + ' MMK' }
                        break
                    }
                    return
                }
            }
            return state
        }
    
  

    }
})

export const {setCost, handleUnit,calcuteTotalTHB,calcuteTotalMMK ,calculateGrandBalance,calculatePricePerKg ,calculateGrandTotal} = calculateAmountSlice.actions
export default calculateAmountSlice.reducer 