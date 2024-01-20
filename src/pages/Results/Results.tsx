import TopBar from '../../components/TopBar'
import { useAppSelector } from '../../hooks/hooks';

const Results = () => {
	const {height, weight, age, activity, behaviorIndex} = useAppSelector(state => state.foodMentorReducer)
	let DailyCalories = Math.round(activity*(447.593 + (9.247 * (+weight)) + (3.098 * (+height)) - (4.330 * (+age))))
	const recommendation = [
		'Recommendation: Prioritize time for rest and sleep. Regular sleep is crucial for overall well-being.',
		'Recommendation: Gradually reduce the consumption of sweet foods and replace them with healthier alternatives, such as fruits.',
		'Recommendation: Limit the intake of carbonated drinks by opting for water, skim milk, or non-carbonated beverages.',
		'Recommendation: Reduce salt intake by choosing less salty foods and using spices to add flavor.',
		'Recommendation: Try to avoid late-night snacks. If hungry, opt for light and healthier snacks.',
		'Recommendation: Continue making healthy choices and maintaining an active lifestyle.',
	]
	const showRecommendation = behaviorIndex !== 5
	
	return (
		<>
			<TopBar/>
			<main className="result">
				<section className="result__section result-section">
					<div className="result-section__container">
						<h1 className="result-section__title title">Your daily calorie intake: <span>{DailyCalories}kcal</span></h1>
						{showRecommendation && (
							<p className="result-section__recommendation">
								{recommendation[behaviorIndex]}
							</p>
						)}				
					</div>
				</section>
			</main>
		</>
	)
}

export default Results