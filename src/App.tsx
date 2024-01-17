import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={ <HomePage/> }/>
			{/* <Route path="/404" element={ <Page404/> }/>
			<Route path="*" element={ <Redirect404/> }/> */}
		</Routes>
	)
}

export default App;