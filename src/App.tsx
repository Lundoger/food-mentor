import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MeasurementsPage from './pages/MeasurementPage/MeasurementsPage';
import AgePage from './pages/AgePage/AgePage';
import DestructiveBehaviors from './pages/DestructiveBehaviors/DestructiveBehaviors';
import PhysicalExercise from './pages/Physical/PhysicalExercise';
import Results from './pages/Results/Results';
import Page404 from './pages/Page404/Page404';
import Redirect404 from './components/Redirect404';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={ <HomePage/> }/>
			<Route path="/measurements" element={ <MeasurementsPage/> }/>
			<Route path="/age" element={ <AgePage/> }/>
			<Route path="/destructive-behavior" element={ <DestructiveBehaviors/> }/>
			<Route path="/physical-exercise" element={ <PhysicalExercise/> }/>
			<Route path="/result" element={ <Results/> }/>
			<Route path="/404" element={ <Page404/> }/>
			<Route path="*" element={ <Redirect404/> }/>
		</Routes>
	)
}

export default App;