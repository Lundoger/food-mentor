import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface foodMentorState {
	charList: [],
}

const initialState: foodMentorState = {
	charList: [],
}	

export const foodMentorSlice = createSlice({
	name: 'foodMentor',
	initialState,
	reducers: {
		selectCharacter(state, action: PayloadAction<[]>) {
			state.charList = action.payload
		},
	}
})

export default foodMentorSlice.reducer