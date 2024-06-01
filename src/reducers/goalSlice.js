import { createSlice } from "@reduxjs/toolkit"

export const goalsSlice = createSlice({
    name: "goals",
    initialState: {
        value: []
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload)
            fetch("http://localhost:3001/goals/addGoals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "inventado1"
                },
                body: JSON.sntringify(action.payload)
            }).catch((err) => {
                console.log(err);
            })
        }, initAddGoal: (state, action) => {
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((goal) => goal.id !== action.payload.id);
            fetch("http:localhost:3001/goals/removeGoals/" + action.payload, {
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

export const { addGoal, removeGoal } = goalsSlice.actions;
export const selectGoals = (state)=> state.goals.value
export default goalsSlice.reducer;