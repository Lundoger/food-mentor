import TopBar from '../../components/TopBar'
import ContinueButton from '../../components/ContinueButton'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { foodMentorSlice } from '../../store/reducers/foodMentorSlice'
import Moon from '../../assets/destructive-behavior/moon.png'
import Food from '../../assets/destructive-behavior/food-and-restaurant 1.png'
import Soda from '../../assets/destructive-behavior/soda.png' 
import Salt from '../../assets/destructive-behavior/salt.png'
import Pizza from '../../assets/destructive-behavior/pizza.png'
import Cross from '../../assets/destructive-behavior/cross.png'
import classNames from 'classnames'

const DestructiveBehaviors = () => {
	const {behaviorIndex} = useAppSelector(state => state.foodMentorReducer)
	const {setBehavior} = foodMentorSlice.actions
	const dispatch = useAppDispatch()

	const buttons = [
		{imagePath: Moon, alt: "moon", content: "I don't rest enough"},
		{imagePath: Food, alt: "Food", content: "I have a sweet tooth"},
		{imagePath: Soda, alt: "Soda", content: "I have too much soda"},
		{imagePath: Salt, alt: "Salt", content: "I eat many salty foods"},
		{imagePath: Pizza, alt: "Pizza", content: "I enjoy midnight snacks"},
		{imagePath: Cross, alt: "Cross", content: "None of the above"},
	]

	const destructiveBehaviors = buttons.map(el => el.content)
	localStorage.setItem('destructiveBehaviors', JSON.stringify(destructiveBehaviors))

	const isButtonDisabled = behaviorIndex === -1

	return (
		<>
			<TopBar/>
			<main className="destructive">
				<section className="destructive__section section-destructive">
					<div className="section-destructive__container">
						<div className="section-destructive__text-block">
							<h1 className="section-destructive__title title">Destructive behaviors</h1>
							<p className="section-destructive__description">We all have them! Which are yours?</p>
						</div>
						<div className="section-destructive__grid-container">
							{buttons.map((button, i) => (
								<button 
									key={i} 
									className={classNames("section-destructive__item", "item-section-destructive", i === behaviorIndex && "item-section-destructive--active")}
									onClick={() => {
										dispatch(setBehavior(i))
									}}
								>
									<div className="item-section-destructive__icon">
										<img src={button.imagePath} alt={button.alt}/>
									</div>
									<p className="item-section-destructive__text">{button.content}</p>
								</button>
							))}
						</div>
						<ContinueButton to={'/physical-exercise'} disabled={isButtonDisabled}/>
					</div>
				</section>
			</main>
		</>
	)
}

export default DestructiveBehaviors