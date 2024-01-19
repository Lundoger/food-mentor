import React from 'react'
import TopBar from '../../components/TopBar'
import ContinueButton from '../../components/ContinueButton'
import Moon from '../../assets/destructive-behaivor/moon.png'
import Food from '../../assets/destructive-behaivor/food-and-restaurant 1.png'
import Soda from '../../assets/destructive-behaivor/soda.png'
import Salt from '../../assets/destructive-behaivor/salt.png'
import Pizza from '../../assets/destructive-behaivor/pizza.png'
import Cross from '../../assets/destructive-behaivor/cross.png'

const DestructiveBehaviors = () => {
	const buttons = [
		{imagePath: Moon, alt: 'moon', content: 'I dont rest enough'},
	]

	return (
		<>
			<TopBar disabled={false}/>
			<main className="destructive">
				<section className="destructive__section section-destructive">
					<div className="section-destructive__container">
						<div className="section-destructive__text-block">
							<h1 className="section-destructive__title title">Destructive behaviors</h1>
							<p className="section-destructive__description">We all have them! Which are yours?</p>
						</div>
						<div className="section-destructive__grid-container">
							<button className='section-destructive__item item-section-destructive'>
								<div className="item-section-destructive__icon">
									<img src={Moon} alt="moon"/>
								</div>
								<p className="item-section-destructive__text">I don't rest enough</p>
							</button>
							<button className='section-destructive__item item-section-destructive'>
								<div className="item-section-destructive__icon">
									<img src={Food} alt="moon"/>
								</div>
								<p className="item-section-destructive__text">I have a sweet tooth</p>
							</button>
							<button className='section-destructive__item item-section-destructive'>
								<div className="item-section-destructive__icon">
									<img src={Soda} alt="moon"/>
								</div>
								<p className="item-section-destructive__text">I have too much soda</p>
							</button>
							<button className='section-destructive__item item-section-destructive'>
								<div className="item-section-destructive__icon">
									<img src={Salt} alt="moon"/>
								</div>
								<p className="item-section-destructive__text">I eat many salty foods</p>
							</button>
							<button className='section-destructive__item item-section-destructive'>
								<div className="item-section-destructive__icon">
									<img src={Pizza} alt="moon"/>
								</div>
								<p className="item-section-destructive__text">I enjoy midnight snacks</p>
							</button>
							<button className='section-destructive__item item-section-destructive'>
								<div className="item-section-destructive__icon">
									<img src={Cross} alt="moon"/>
								</div>
								<p className="item-section-destructive__text">None of the above</p>
							</button>
						</div>
						<ContinueButton to={'/'} disabled={true}/>
					</div>
				</section>
			</main>
		</>
	)
}

export default DestructiveBehaviors