import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState: { value: { name:"didier",age:0,email:"didier@gmail.com" } },
    reducers:{
        login: (state,action)=> {
            state.value = action.payload;
        },

        logout: (state,action) => {
            state.value = { name:"",age:0,email:"" };
        }

       

    }
});


export  const {login,logout} = userSlice.actions;
export default userSlice.reducer;