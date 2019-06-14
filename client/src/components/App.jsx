import React, { Component } from 'react';
import colehaan1 from '../assets/colehaan1.jpg';
import colehaan2 from '../assets/colehaan2.jpg';
import colehaan3 from '../assets/colehaan3.jpg';
import colehaan4 from '../assets/colehaan4.jpg';
import colehaan5 from '../assets/colehaan5.jpg';
//import MainImg from './MainImg';
//import { Discovery } from 'aws-sdk';

class App extends Component {
	render () {
		return (
			<div className="App">
				<img src={colehaan1} />
				<img src={colehaan2} />
				<img src={colehaan3} />
				<img src={colehaan4} />
				<img src={colehaan5} />
			</div>
		);
	}
}

export default App;
