import { createSlice } from "@reduxjs/toolkit";

const mm_th_data = {
    MM_TH_weight:'', MM_TH_kgPerPrice: '',MM_TH_exchangeRate: '',MM_TH_totalInMMK:'',
    MM_TH_totalKgPrice: '', MM_TH_pickupFee: '',MM_TH_deliveryFeeTHB: '',
    MM_TH_packageFee: '', MM_TH_receiverInfo: {
        name: '',
        phone: '',
        address: ''
    },MM_TH_grandTotal: '', MM_TH_advanced: '', MM_TH_grandBalance: ''
}

const mm_th_calculateAmountSlice = createSlice({
    name: 'mm-th',
    initialState: mm_th_data,
    reducers: {
        updateData: (state,actions) => {
            switch (actions.payload.type){
                case 'weight': {
                 state = {...state,MM_TH_weight:actions.payload.value}
                 break
                }
                case 'exchangeRate': {
                 state = {...state,MM_TH_exchangeRate:actions.payload.value}
                 break
                }

                case 'packageFee': {
                 state = {...state,MM_TH_packageFee:actions.payload.value}
                 break
                }

                case 'pickupFee': {

                    state = {...state,MM_TH_pickupFee:actions.payload.value}
                    break
                }


                case 'advanced': {
                 state = {...state,MM_TH_advanced: actions.payload.value}
                 break
                }

                case 'receiverName': {
                    let rInfo = state.MM_TH_receiverInfo
                    rInfo = {...rInfo, name: actions.payload.value}
                    state = {...state,MM_TH_receiverInfo : {...rInfo}}
                    break;
                }
                case 'receiverPhone': {
                    let rInfo = state.MM_TH_receiverInfo
                    rInfo = {...rInfo, phone: actions.payload.value}
                    state = {...state,MM_TH_receiverInfo : {...rInfo}}
                    break;
                }
                case 'receiverAddress': {
                    let rInfo = state.MM_TH_receiverInfo
                    rInfo = {...rInfo, address: actions.payload.value}
                    state = {...state,MM_TH_receiverInfo : {...rInfo}}
                    break;
                }
                

                default :{ return state}
MM_TH_
                               
            }
            return state
        },
        
        addUnitOnblur: (state,actions) => {

            switch(actions.payload) {
                case ('kg') : {
                    if(state.MM_TH_weight === '') {
                        return
                    }else {
                                                
                        state = {...state , MM_TH_weight: state.MM_TH_weight + ' KG'}
                        break;
                    }
                }
                case ('exchangeRate') : {
                    if(state.MM_TH_exchangeRate === '') {
                        return
                    }else {
                                                
                        state = {...state , MM_TH_exchangeRate: state.MM_TH_exchangeRate + ' MMK'}
                        break;
                    }
                }

                case ('pickupFee') : {
                    if(state.MM_TH_pickupFee === '') {
                        return
                    }else {
                              
                        const pickupFeeInNumberType = 
                        parseInt(state.MM_TH_pickupFee)
                        state = {...state, MM_TH_pickupFee: pickupFeeInNumberType.toLocaleString() + ' MMK'}
                        break;
                    }
                }

                case ('packageFee') : {
                    if(state.MM_TH_packageFee === '') {
                        return
                    }else {
               
                        const packageFeeInNumberType = 
                        parseInt(state.MM_TH_packageFee)
                        state = {...state, MM_TH_packageFee: packageFeeInNumberType.toLocaleString() + ' MMK'}
                        break;
                    }
                }

                case ('advanced') : {
                    if(state.MM_TH_advanced === '') {
                        return
                    }else {
                        const advancedInNumberType = 
                        parseInt(state.MM_TH_advanced)
                        state = {...state, MM_TH_advanced: advancedInNumberType.toLocaleString() + ' MMK'}
                      break;
                    }
                }

                default: {
                    return state;
                }

            }
            return state;
    
        },

        calculateTotalKgPrice:(state) => {
            
            if(state.MM_TH_weight) {
                
                const kg = state.MM_TH_weight.match(/(\d+(\.\d+)?)/)
                
                if( parseFloat(kg[0]) > 3 ){
                    
                    const priceNoWithNoComa = state.MM_TH_kgPerPrice.replace(/,/g, '');
                    const price = priceNoWithNoComa.match(/(\d+)/)
                    
                    const total = kg[0] * price[0]
                    
                    return {...state,MM_TH_totalKgPrice: total.toLocaleString() + ' THB'}
                } else {
                    
                    
                    return {...state,MM_TH_totalKgPrice: '250 THB'}
                }
            }

        },

        calculateKgPerPrice: (state) => {

            if(state.MM_TH_weight) {

                let inputKg = state.MM_TH_weight.match(/(\d+(\.\d+)?)/)
                const inputKgvalue = Number(inputKg[0])

                
                switch (true){
    
                    case (inputKgvalue < 3 ) : {
                 
                        state = {...state,MM_TH_kgPerPrice: '250 THB'}
                        break;
                    }
                   
                    case (inputKgvalue > 3 && inputKgvalue <= 10) :{
                    
                        state = {...state,MM_TH_kgPerPrice: '80 THB'}
                        break;
                    }
    
                    case (inputKgvalue > 10 && inputKgvalue <= 50) : {
                        state = {...state,MM_TH_kgPerPrice: '70 THB'}
                        break;
                    }
                    case (inputKgvalue > 50) : {
                        state = {...state,MM_TH_kgPerPrice: '60 THB'}
                        break;
                    }
                   
    
                    default :{
                       
                        return state}
                    }
                    return state;

            }

           
        },

        calculateTotalMMK: (state) => {

            if(state.MM_TH_exchangeRate && state.MM_TH_totalKgPrice) {
                const exchangeRateNoWithNoComa = state.MM_TH_exchangeRate.replace(/,/g, '');
                const exchangeRate = exchangeRateNoWithNoComa.match(/(\d+)/)

                const totalPriceNoWithNoComa = state.MM_TH_totalKgPrice.replace(/,/g, '');
                const totalPrice =totalPriceNoWithNoComa.match(/(\d+)/)

                const totalInMMK = totalPrice[0] * exchangeRate[0]
               return state = {...state,MM_TH_totalInMMK: totalInMMK.toLocaleString() + ' MMK'}

                console.log(totalInMMK)
            }
        },

        calculateTotalAmount: (state) => {

         if(!state.MM_TH_pickupFee && state.MM_TH_packageFee){ 

                const packingNoWithNoComa = state.MM_TH_packageFee.replace(/,/g, '');
                const packing = packingNoWithNoComa.match(/(\d+)/)

                const totalPriceNoWithNoComa = state.MM_TH_totalInMMK.replace(/,/g, '');
                const totalPrice =totalPriceNoWithNoComa.match(/(\d+)/)
                        
                const totalAmountWithNoPackingFee = Number(packing[0]) + Number(totalPrice[0])
                return state ={...state, MM_TH_grandTotal: 
                    totalAmountWithNoPackingFee.toLocaleString() + ' MMK'}

            }else if(state.MM_TH_pickupFee && !state.MM_TH_packageFee) {

                const pickupNoWithNoComa = state.MM_TH_pickupFee.replace(/,/g, '');
                const pickup = pickupNoWithNoComa.match(/(\d+)/)

                const totalKgPriceNoWithNoComa = state.MM_TH_totalInMMK.replace(/,/g, '');
                const totalPrice = totalKgPriceNoWithNoComa.match(/(\d+)/)

                const totalAmountWithNoPickupFee = Number(pickup[0]) + Number(totalPrice[0])
                return state ={...state, MM_TH_grandTotal: 
                    totalAmountWithNoPickupFee.toLocaleString() + ' MMK'}

                
              
            } else if(state.MM_TH_pickupFee && state.MM_TH_packageFee) {

                const pickupNoWithNoComa = state.MM_TH_pickupFee.replace(/,/g, '');
                const pickup = pickupNoWithNoComa.match(/(\d+)/)

                const packingNoWithNoComa = state.MM_TH_packageFee.replace(/,/g, '');
                const packing = packingNoWithNoComa.match(/(\d+)/)

                 const totalKgPriceNoWithNoComa = state.MM_TH_totalInMMK.replace(/,/g, '');
                const totalPrice = totalKgPriceNoWithNoComa.match(/(\d+)/)
                
                const Gtotal = Number(pickup[0]) + Number(packing[0]) + Number(totalPrice[0])
                
                return state = {...state, MM_TH_grandTotal: Gtotal.toLocaleString() + ' MMK'}

            }else {
                return state = {...state,MM_TH_grandTotal: state.MM_TH_totalInMMK}
            }
        },

        handleGrandBalance : (state) => {
            if(state.MM_TH_advanced) {
                const grandTotalWithNoComa = state.MM_TH_grandTotal.replace(/,/g, '');
                const Gtotal = grandTotalWithNoComa.match(/(\d+)/)

                const advancedWithNoComa = state.MM_TH_advanced.replace(/,/g, '')
                const addvan = advancedWithNoComa.match(/(\d+)/)

                const Gbalance = Number(Gtotal[0]) - Number(addvan[0])

                return state = {...state, MM_TH_grandBalance: Gbalance.toLocaleString() + ' MMK'}

            } else {
                return state = {...state,MM_TH_grandBalance: state.MM_TH_grandTotal}
            }
        }
    }
    
})

export const {updateData,calculateKgPerPrice,calculateTotalKgPrice,addUnitOnblur,calculateTotalAmount, handleGrandBalance,calculateTotalMMK} = mm_th_calculateAmountSlice.actions

export default mm_th_calculateAmountSlice.reducer