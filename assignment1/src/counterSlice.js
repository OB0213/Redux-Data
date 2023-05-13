import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[],
    counter:0
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        addData: (state,action)=>{
            state.value.push(action.payload);

        },
        addNumber:(state)=>{
            state.counter=state.counter+1;
        }
        }
       
    }
);

export const {addData,addNumber}=counterSlice.actions;
export default counterSlice.reducer;