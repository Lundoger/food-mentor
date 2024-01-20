import { useLocation, useNavigate } from 'react-router-dom'
import avocadoLogo from '../assets/avocado-logo.png'
import classNames from 'classnames'

const TopBar = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<nav className={classNames('top-bar', pathname === '/' && 'top-bar--disabled')}>
			<div className="top-bar__container">
				<button onClick={handleGoBack} className="top-bar__button">
					<div className="top-bar__arrow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#374234" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
					</div>
					<div className="top-bar__name">
						<div className="top-bar__avocado">
							<img src={avocadoLogo} alt="avocado" />
						</div>
						<h2 className="top-bar__title">Food Mentor</h2>
					</div>
				</button>
			</div>
		</nav>
	)
}

export default TopBar