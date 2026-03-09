import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload);
        }
    }
})
export const {addTask}=colorSlice.actions;
export default colorSlice.reducer;