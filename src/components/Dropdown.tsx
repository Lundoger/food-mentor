import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { foodMentorSlice } from "../store/reducers/foodMentorSlice";
import InputField from "./InputField";

interface DropdownProps {
	chosenSystem: string;
}

const Dropdown = ({ chosenSystem }: DropdownProps) => {
	const { height, weight } = useAppSelector(state => state.foodMentorReducer)
	const { setHeight, setWeight } = foodMentorSlice.actions
	const dispatch = useAppDispatch()

	const placeholderHeight = chosenSystem === 'imperial' ? 'Height(ft)' : 'Height(cm)'
	const placeholderWeight = chosenSystem === 'imperial' ? 'Weight(lb)' : 'Weight(kg)'

	return (
		<div className="measurements__dropdown">
			<InputField
				placeholder={placeholderHeight}
				value={height}
				onChange={e => dispatch(setHeight(e.target.value))}
			/>
			<InputField
				placeholder={placeholderWeight}
				value={weight}
				onChange={e => dispatch(setWeight(e.target.value))}
			/>
		</div>
	)
}

export default Dropdown