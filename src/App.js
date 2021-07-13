import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HouseList from './components/HouseList/HouseList';
import { Container } from 'react-bootstrap';
import HouseProfile from './components/HouseProfile/HouseProfile';

function App() {
	const [houses, setHouses] = useState([]);
	const [houseImages, setHouseImages] = useState([]);

	const fetchHousesData = async () => {
		const housesData = await axios.get(
			'https://cdn.contentful.com/spaces/d8pkg2i38l1p/environments/master/entries?access_token=-o-faF4K_DA3TyMp6PVfP7sGvuhD8213iFN8O5uetxU&content_type=houseListing'
		);
		setHouses(housesData.data.items);
		setHouseImages(housesData.data.includes.Asset);
	};

	useEffect(() => {
		fetchHousesData();
	}, []);
	return (
		<Router>
			<Container>
				<Header />
				<Switch>
					<Route exact path='/'>
						<HouseList houses={houses} houseImages={houseImages} />
					</Route>
					<Route exact path='/house/:id'>
						<HouseProfile houses={houses} houseImages={houseImages} />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
