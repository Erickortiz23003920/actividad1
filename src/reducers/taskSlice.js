import { createSlice } from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        value: []
    },
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload)
            fetch("http://localhost:3001/tasks/addTasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "inventado1"
                },
                body: JSON.stringify(action.payload)
            }).catch((err) => {
                console.log(err);
            })
        },
        initAddTask: (state, action) => {
            state.value.push(action.payload)
        },
        removeTask: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload.id);
            fetch("http:localhost:3001/tasks/removeTasks/" + action.payload, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "inventado1"
                }, 
            }).catch(err => {
                console.log(err)
            })
        }
    }
})

export const { addTask, removeTask, initAddTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.value
export default tasksSlice.reducer;