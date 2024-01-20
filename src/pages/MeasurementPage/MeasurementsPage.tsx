import TopBar from '../../components/TopBar'
import ContinueButton from '../../components/ContinueButton'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { foodMentorSlice } from '../../store/reducers/foodMentorSlice'
import Dropdown from '../../components/Dropdown'
import classNames from 'classnames'


const MeasurementsPage = () => {
	const {imperial, metric, height, weight} = useAppSelector(state => state.foodMentorReducer)
	const {selectImperial, selectMetric} = foodMentorSlice.actions
	const dispatch = useAppDispatch()

	const isButtonDisabled = !height || !weight
	return (
		<>
			<TopBar/>
			<main className="page">
				<section className="page__measurements measurements">
					<div className="measurements__container">
						<div className="measurements__actions">
							<button onClick={() => dispatch(selectImperial(true))} className={classNames('measurements__button', imperial && 'measurements__button--active')}>Imperial</button>
							<button onClick={() => dispatch(selectMetric(true))} className={classNames('measurements__button', metric && 'measurements__button--active')}>Metric</button>
							{imperial && <Dropdown chosenSystem="imperial"/>}
							{metric && <Dropdown chosenSystem="metric"/>}
						</div>
						<div className="measurements__text">
							<h1 className="measurements__title title">Measure Yourself</h1>
							<p className="measurements__description">What are your height and body weight?</p>
						</div>
						<ContinueButton to={'/age'} disabled={isButtonDisabled}/>
					</div>
				</section>
			</main>
		</>
	)
}

export default MeasurementsPage