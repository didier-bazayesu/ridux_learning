import { createSlice } from "@reduxjs/toolkit";


const ingredientSlice = createSlice({
    name:"ingredients",
    initialState: { value: [] },
    reducers:{
        addIngredient: (state,action)=> {
            state.value = [...state.value, action.payload];
        },
        deleteIngredient: (state,action) => {
            state.value = state.value.filter((__,index) => index !== action.payload);
        }

       

       

    }
});


export  const {addIngredient ,deleteIngredient} = ingredientSlice.actions;
export default ingredientSlice.reducer;