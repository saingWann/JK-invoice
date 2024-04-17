import { createSlice } from "@reduxjs/toolkit";

const mm_th_data = {
    weight:'', kgPerPrice: '',
    totalKgPrice: '', pickupFee: '',deliveryFeeTHB: '',
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

                case 'packageFee': {
                 state = {...state,packageFee:actions.payload.value}
                 break
                }

                case 'pickupFee': {

                    state = {...state,pickupFee:actions.payload.value}
                    break
                }


                case 'advanced': {
                 state = {...state,advanced: actions.payload.value}
                 break
                }

                case 'receiverName': {
                    let rInfo = state.receiverInfo
                    rInfo = {...rInfo, name: actions.payload.value}
                    state = {...state,receiverInfo : {...rInfo}}
                    break;
                }
                case 'receiverPhone': {
                    let rInfo = state.receiverInfo
                    rInfo = {...rInfo, phone: actions.payload.value}
                    state = {...state,receiverInfo : {...rInfo}}
                    break;
                }
                case 'receiverAddress': {
                    let rInfo = state.receiverInfo
                    rInfo = {...rInfo, address: actions.payload.value}
                    state = {...state,receiverInfo : {...rInfo}}
                    break;
                }
                

                default :{ return state}

                               
            }
            return state
        },
        
        addUnitOnblur: (state,actions) => {

            switch(actions.payload) {
                case ('kg') : {
                    if(state.weight === '') {
                        return
                    }else {
                                                
                        state = {...state , weight: state.weight + ' KG'}
                        break;
                    }
                }

                case ('pickupFee') : {
                    if(state.pickupFee === '') {
                        return
                    }else {
                              
                        const pickupFeeInNumberType = 
                        parseInt(state.pickupFee)
                        state = {...state, pickupFee: pickupFeeInNumberType.toLocaleString() + ' MMK'}
                        break;
                    }
                }

                case ('packageFee') : {
                    if(state.packageFee === '') {
                        return
                    }else {
               
                        const packageFeeInNumberType = 
                        parseInt(state.packageFee)
                        state = {...state, packageFee: packageFeeInNumberType.toLocaleString() + ' MMK'}
                        break;
                    }
                }

                case ('advanced') : {
                    if(state.advanced === '') {
                        return
                    }else {
                        const advancedInNumberType = 
                        parseInt(state.advanced)
                        state = {...state, advanced: advancedInNumberType.toLocaleString() + ' MMK'}
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
            
            if(state.weight) {
                
                const kg = state.weight.match(/(\d+(\.\d+)?)/)
                
                if( parseFloat(kg[0]) > 3 ){
                    
                    const priceNoWithNoComa = state.kgPerPrice.replace(/,/g, '');
                    const price = priceNoWithNoComa.match(/(\d+)/)
                    
                    const total = kg[0] * price[0]
                    
                    return {...state,totalKgPrice: total.toLocaleString() + ' MMK'}
                } else {
                    
                    
                    return {...state,totalKgPrice: '20,000 MMK'}
                }
            }

        },

        calculateKgPerPrice: (state) => {

            if(state.weight) {

                let inputKg = state.weight.match(/(\d+(\.\d+)?)/)
                const inputKgvalue = Number(inputKg[0])

                
                switch (true){
    
                    case (inputKgvalue <= 3 ) : {
                 
                        state = {...state,kgPerPrice: '20,000 MMK'}
                        break;
                    }
                   
                    case (inputKgvalue > 3 && inputKgvalue <= 10) :{
                    
                        state = {...state,kgPerPrice: '6,000 MMK'}
                        break;
                    }
    
                    case (inputKgvalue > 10 && inputKgvalue <= 50) : {
                        state = {...state,kgPerPrice: '5,000 MMK'}
                        break;
                    }
                    case (inputKgvalue > 50) : {
                        state = {...state,kgPerPrice: '4,500 MMK'}
                        break;
                    }
                   
    
                    default :{
                       
                        return state}
                    }
                    return state;

            }

           
        },

        calculateTotalAmount: (state) => {

         if(!state.pickupFee && state.packageFee){ 

                const packingNoWithNoComa = state.packageFee.replace(/,/g, '');
                const packing = packingNoWithNoComa.match(/(\d+)/)

                const totalPriceNoWithNoComa = state.totalKgPrice.replace(/,/g, '');
                const totalPrice =totalPriceNoWithNoComa.match(/(\d+)/)
                        
                const totalAmountWithNoPackingFee = Number(packing[0]) + Number(totalPrice[0])
                return state ={...state, grandTotal: 
                    totalAmountWithNoPackingFee.toLocaleString() + ' MMK'}

            }else if(state.pickupFee && !state.packageFee) {

                const pickupNoWithNoComa = state.pickupFee.replace(/,/g, '');
                const pickup = pickupNoWithNoComa.match(/(\d+)/)

                const totalKgPriceNoWithNoComa = state.totalKgPrice.replace(/,/g, '');
                const totalPrice = totalKgPriceNoWithNoComa.match(/(\d+)/)

                const totalAmountWithNoPickupFee = Number(pickup[0]) + Number(totalPrice[0])
                return state ={...state, grandTotal: 
                    totalAmountWithNoPickupFee.toLocaleString() + ' MMK'}

                
              
            } else if(state.pickupFee && state.packageFee) {

                const pickupNoWithNoComa = state.pickupFee.replace(/,/g, '');
                const pickup = pickupNoWithNoComa.match(/(\d+)/)

                const packingNoWithNoComa = state.packageFee.replace(/,/g, '');
                const packing = packingNoWithNoComa.match(/(\d+)/)

                 const totalKgPriceNoWithNoComa = state.totalKgPrice.replace(/,/g, '');
                const totalPrice = totalKgPriceNoWithNoComa.match(/(\d+)/)
                
                const Gtotal = Number(pickup[0]) + Number(packing[0]) + Number(totalPrice[0])
                
                return state = {...state, grandTotal: Gtotal.toLocaleString() + ' MMK'}

            }else {
                return state = {...state, grandTotal: state.totalKgPrice}
            }
        },

        handleGrandBalance : (state) => {
            if(state.advanced) {
                const grandTotalWithNoComa = state.grandTotal.replace(/,/g, '');
                const Gtotal = grandTotalWithNoComa.match(/(\d+)/)

                const advancedWithNoComa = state.advanced.replace(/,/g, '')
                const addvan = advancedWithNoComa.match(/(\d+)/)

                const Gbalance = Number(Gtotal[0]) - Number(addvan[0])

                return state = {...state, grandBalance: Gbalance.toLocaleString() + ' MMK'}

            } else {
                return state = {...state,grandBalance: state.grandTotal}
            }
        }
    }
    
})

export const {updateData,calculateKgPerPrice,calculateTotalKgPrice,addUnitOnblur,calculateTotalAmount, handleGrandBalance} = mm_th_calculateAmountSlice.actions

export default mm_th_calculateAmountSlice.reducer