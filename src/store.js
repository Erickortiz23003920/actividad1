import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalSlice";
import taskReducer from "./reducers/taskSlice";
import optionReducer from "./reducers/optionsSlice"

export default configureStore({
    reducer:{
        goals: goalReducer,
        task: taskReducer,
        option: optionReducer
    }
})