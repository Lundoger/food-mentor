import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface foodMentorState {
	imperial: boolean,
	metric: boolean,
	height: string,
	weight: string,
}

const initialState: foodMentorState = {
	imperial: false,
	metric: false,
	height: '',
	weight: '',
}	

export const foodMentorSlice = createSlice({
	name: 'foodMentor',
	initialState,
	reducers: {
		selectImperial(state, action: PayloadAction<boolean>) {
			state.imperial = action.payload
			state.metric = !action.payload
		},
		selectMetric(state, action: PayloadAction<boolean>) {
			state.metric = action.payload
			state.imperial = !action.payload
		},
		setHeight(state, action: PayloadAction<string>) {
			state.height = action.payload
		},
		setWeight(state, action: PayloadAction<string>) {
			state.weight = action.payload
		},
	}
})

export default foodMentorSlice.reducer