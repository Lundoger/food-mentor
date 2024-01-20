import { Link } from 'react-router-dom'
import ironMan from '../assets/iron-man-char.jpg'

const Page404 = () => {
	return (
		<>
			<main className="page-404">
				<section className="page-404__error-page error-page">
					<div className="error-page__container">
						<p style={{marginBottom: '1rem'}}>404 PAGE NOT FOUND</p>
						<Link to={'/'} style={{textDecoration: 'underline'}}>Go to the Home page</Link>
					</div>
				</section>
			</main>
		</>
	)
}

export default Page404