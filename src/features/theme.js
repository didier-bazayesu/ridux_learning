import { createSlice } from "@reduxjs/toolkit";


const changeColor = createSlice({
    name:"theme",
    initialState: { value: "black" },
    reducers:{
        
        color: (state, action) => {
            state.value = action.payload;
        }

    }
});


export  const {color} = changeColor.actions;
export default changeColor.reducer;