import { createSlice } from "@reduxjs/toolkit";

const CategoriesSlice = createSlice({
    name: 'categories',
    initialState: 'all',
    reducers: {
        setCategories: (state,action) => {
            return state = action.payload
        }
    }
})

export const {setCategories} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
