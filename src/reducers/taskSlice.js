import { createSlice } from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        value: []
    },
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload)
        },
        removeTask: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload.id);

        }
    }
})

export const { addTask, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.value
export default tasksSlice.reducer;