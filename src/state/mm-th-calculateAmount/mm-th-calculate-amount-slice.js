import { createSlice } from "@reduxjs/toolkit";

const mm_th_data = {
    weight:'', kgPerPrice: '',
    totalKgPrice: '', deliveryFeeMMK: '',deliveryFeeTHB: '',
    exchagneRate:'', totalAmountInMMK: '',
    packageFee: '', receiverInfo: {
        name: '',
        phone: '',
        address: ''
    },grandTotal: '', advanced: '', grandBalance: ''
}

const mm_th_calculateAmountSlice = createSlice({
    name: 'mm-th',
    initialState: mm_th_data,
    reducers: {
        updateData: (state,actions) => {
            switch (actions.payload.type){
                case 'weight': {
                 state = {...state,weight:actions.payload.value}
                 break
                }

                case 'deliveryFeeTHB': {
                 state = {...state,deliveryFeeTHB:actions.payload.value}
                 break
                }

                case 'exchange': {
                 state = {...state,exchagneRate:actions.payload.value}
                 break
                }

                case 'packageFee': {
                 state = {...state,packageFee:actions.payload.value}
                 break
                }


                case 'receiverName': {
                    let rInfo = state.receiverInfo
                    rInfo = {...rInfo, name: actions.payload.value}
                    state = {...state,receiverInfo : {...rInfo}}
                }
                case 'receiverPhone': {
                    let rInfo = state.receiverInfo
                    rInfo = {...rInfo, phone: actions.payload.value}
                    state = {...state,receiverInfo : {...rInfo}}
                }
                case 'receiverAddress': {
                    let rInfo = state.receiverInfo
                    rInfo = {...rInfo, address: actions.payload.value}
                    state = {...state,receiverInfo : {...rInfo}}
                }
                

                default :{ return state}

                               
            }
            return state
        },
        
        addUnitOnblur: (state,actions) => {

            switch(actions.payload) {

                case 'kg' : {
                    if(state.weight === ''){
                        return
                    }else {

                        state = {...state, weight: state.weight + ' KG'}
                        break
                    }
                }

                case 'pricePerKg' :{
                    
                   state = {...state, kgPerPrice: state.kgPerPrice + ' THB'}
                   break
                }

                case 'exchangeRate' :{
                    if(state.exchagneRate === ''){
                        return
                    }else {

                        state = {...state, exchagneRate: state.exchagneRate + ' MMK'}
                        break
                    }
                }

                case 'deliveryFeeTHB' : {
                    if(state.deliveryFeeTHB === ''){
                        return
                    }else {
                        
                        state = {...state, deliveryFeeTHB: state.deliveryFeeTHB + ' THB' }
                        break
                    }
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


        },

        calculateTotalKgPrice:(state) => {

            if( state.weight > 3 ){
            
                const kg = state.weight.match(/(\d+(\.\d+)?)/)

                const price = state.kgPerPrice.match(/(\d+)/)

                const total = kg[0] * price[0]
                return {...state,totalKgPrice: total + ' MMK'}
            } else {
                console.log('hello')
                return {...state,totalKgPrice: '20000 MMK'}
            }

        },

        calculateDeliFeeMMK: (state) => {
            if(state.deliveryFeeTHB && state.exchagneRate) {
                const deli_THB = state.deliveryFeeTHB.match(/(\d+(\.\d+)?)/)

                const exchange = state.exchagneRate.match(/(\d+(\.\d+)?)/)

                const deliInMMK = deli_THB[0] * exchange[0]

                return {...state,deliveryFeeMMK: deliInMMK + ' MMK'}
            }
        },

        calculateKgPerPrice: (state) => {

            let inputKg = state.weight.match(/(\d+)/)
            const inputKgvalue = Number(inputKg[0])
            
            switch (true){

                case (inputKgvalue <= 3) : {
             
                    state = {...state,kgPerPrice: '20000 MMK'}
                    break;
                }
               
                case (inputKgvalue > 3 && inputKgvalue <= 10) :{
                
                    state = {...state,pricePerKg: '6000 MMK'}
                    break;
                }

                case (inputKgvalue > 10 && inputKgvalue <= 50) : {
                    state = {...state,pricePerKg: '5000 MMK'}
                    break;
                }
                case (inputKgvalue > 50) : {
                    state = {...state,pricePerKg: '4500 MMK'}
                    break;
                }
               

                default :{
                   
                    return state}
                }
                return state;
        },
    }
})

export const {updateData,calculateDeliFeeMMK,calculateKgPerPrice,calculateTotalKgPrice,addUnitOnblur} = mm_th_calculateAmountSlice.actions

export default mm_th_calculateAmountSlice.reducer