import classNames from "classnames"
import ContinueButton from "../../components/ContinueButton"
import TopBar from "../../components/TopBar"
import IconPath from "../../assets/icons/exercise-image.svg"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { foodMentorSlice } from "../../store/reducers/foodMentorSlice"

const PhysicalExercise = () => {
	const {activity} = useAppSelector(state => state.foodMentorReducer)
	const {setActivity} = foodMentorSlice.actions
	const dispatch = useAppDispatch()

	const buttons = [
		{content: 'Hardly at all', activityIndex: 1.2,},
		{content: 'Fitness 1-2 times a week', activityIndex: 1.375,},
		{content: 'Fitness 3-5 times a week', activityIndex: 1.55,},
		{content: 'Fitness 5-7 times a week', activityIndex: 1.725,},
	]

	const isButtonDisabled = activity === 0

	return (
		<>
			<TopBar/>
			<main className="exercise">
				<section className="exercise__section exercise-section">
					<div className="exercise-section__container">
						<div className="exercise-section__text">
							<h1 className="exercise-section__title title">Physical exercise</h1>
							<p className="exercise-section__description">
								Physical exercise means a lot for a woman who 
								wants to lose kilos and works at the office
							</p>
						</div>
						<div className="exercise-section__content">
							<h3 className="exercise-section__name">How active are you during the day?</h3>
							<div className="exercise-section__flex-container">
								<div className="exercise-section__image">
									<img src={IconPath} alt="exercise-icon"/>
								</div>
								<div className="exercise-section__buttons">
									{buttons.map((button, i) => (
										<button 
											className={classNames('exercise-section__button', button.activityIndex === activity && 'exercise-section__button--active')}
											key={i}
											onClick={() => dispatch(setActivity(button.activityIndex))}
										>{button.content}</button>
									))}
								</div>
							</div>
						</div>
						<ContinueButton to={'/result'} disabled={isButtonDisabled}/>				
					</div>
				</section>
			</main>
		</>
	)
}

export default PhysicalExercise