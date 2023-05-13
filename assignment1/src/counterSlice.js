import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[]
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        addData: (state,action)=>{
            state.value.push(action.payload);

        }
        }
       
    }
);

export const {addData}=counterSlice.actions;
export default counterSlice.reducer;