import TopBar from '../../components/TopBar'
import InputField from '../../components/InputField'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { foodMentorSlice } from '../../store/reducers/foodMentorSlice'
import ContinueButton from '../../components/ContinueButton'

const AgePage = () => {
	const {age} = useAppSelector(state => state.foodMentorReducer)
	const {setAge} = foodMentorSlice.actions
	const dispatch = useAppDispatch()

	const isButtonDisabled = !age

	return (
		<>
			<TopBar/>
			<main className="age">
				<section className="age__content content-age">
					<div className="content-age__container">
						<h1 className="content-age__title title">Write your age</h1>
						<div className="content-age__line">
							<InputField
								placeholder={'Write your age'}
								value={age}
								onChange={e => dispatch(setAge(e.target.value))}
							/> 	
						</div>
						<ContinueButton to={'/destructive-behavior'} disabled={isButtonDisabled}/>
					</div>
				</section>
			</main>
		</>
	)
}

export default AgePage