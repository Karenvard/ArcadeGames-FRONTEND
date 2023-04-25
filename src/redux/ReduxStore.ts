import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    authReducer,
})

const ReduxStore = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof ReduxStore['dispatch']


export default ReduxStore;
