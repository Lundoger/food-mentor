import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import foodMentorReducer from './reducers/foodMentorSlice'

const rootReducer = combineReducers({
	foodMentorReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch