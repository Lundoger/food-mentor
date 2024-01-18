import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { foodMentorSlice } from "../store/reducers/foodMentorSlice";

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
			<input
				type="number"
				className="measurements__input"
				placeholder={placeholderHeight}
				value={height}
				onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(setHeight(e.target.value))}
			/>
			<input
				type="number"
				className="measurements__input"
				placeholder={placeholderWeight}
				value={weight}
				onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(setWeight(e.target.value))}
			/>
		</div>
	)
}

export default Dropdown