import { createSlice } from '@reduxjs/toolkit'

const initialState = ['row1','row2','row3']

export const addNewTableRow = createSlice({
  name: 'tableRows',
  initialState,
  reducers: {
    addRow: (state) => {
        if(state.length === 10) return
       const newRow = `row${state.length +1}`
       return state = [...state,newRow]
      
    },
    fillRow: (state) => {
      while(state.length <= 10) {
        const newRow = `row${state.length +1}`
       state = [...state,newRow]

      }
      return state;
    },
    reorderList: (state,actions) => {
        // console.log(actions.payload)
        const items = Array.from(state);
        const [reorderedItem] = items.splice(actions.payload.source.index, 1);
        items.splice(actions.payload.destination.index, 0, reorderedItem);
        return state = [...items]
    }
  
  },
})

// Action creators are generated for each case reducer function
export const { addRow,reorderList,fillRow } = addNewTableRow.actions

export default addNewTableRow.reducer