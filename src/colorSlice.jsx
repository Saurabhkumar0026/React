import { createSlice } from "@reduxjs/toolkit";
const colorSlice = createSlice({
    name: "mycolor",
    initialState: {
        task: []
    },
    reducers: {
        addTask: (state, actions) => {
            state.task.push(actions.payload);
        },
        recDel: (state, actions) => {
            state.task = state.task.filter(key => key.id != actions.payload.id);
        },
        taskComp: (state, actions) => {
            for (var i = 0; i < state.task.length; i++) {
                if (state.task[i].id == actions.payload.id) {
                    state.task[i].complete = true;
                }
            }
        },
        taskInComp: (state, actions) => {
            for (var i = 0; i < state.task.length; i++) {
                if (state.task[i].id == actions.payload.id) {
                    state.task[i].complete = false;
                }
            }
        }

    }
}
    
)
export const { addTask,recDel,taskComp,taskInComp } = colorSlice.actions;
export default colorSlice.reducer;