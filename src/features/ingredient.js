import { createSlice } from "@reduxjs/toolkit";


const ingredientSlice = createSlice({
    name:"ingredients",
    initialState: { value: [] },
    reducers:{
        addIngredient: (state,action)=> {
            state.value = [...state.value, action.payload];
        },

       

       

    }
});


export  const {addIngredient} = ingredientSlice.actions;
export default ingredientSlice.reducer;