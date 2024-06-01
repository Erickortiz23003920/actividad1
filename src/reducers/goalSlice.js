import { createSlice } from "@reduxjs/toolkit"

export const goalsSlice = createSlice({
    name: "goals",
    initialState: {
        value: []
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((goal) => goal.id !== action.payload.id);
        
    }
    }
})

export const { addGoal, removeGoal } = goalsSlice.actions;
export const selectGoals = (state)=> state.goals.value
export default goalsSlice.reducer;