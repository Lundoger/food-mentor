import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MeasurementsPage from './pages/MeasurementPage/MeasurementsPage';
import AgePage from './pages/AgePage/AgePage';
import DestructiveBehaviors from './pages/DestructiveBehaviors/DestructiveBehaviors';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={ <HomePage/> }/>
			<Route path="/measurements" element={ <MeasurementsPage/> }/>
			<Route path="/age" element={ <AgePage/> }/>
			<Route path="/destructive" element={ <DestructiveBehaviors/> }/>
			{/* <Route path="/404" element={ <Page404/> }/>
			<Route path="*" element={ <Redirect404/> }/> */}
		</Routes>
	)
}

export default App;