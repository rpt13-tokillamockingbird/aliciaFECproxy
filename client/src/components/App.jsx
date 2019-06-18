import React, { Component } from 'react';
import MainImg from './MainImg.jsx';
import Thumbnails from './ThumbnailList.jsx';

//import { Discovery } from 'aws-sdk';

class App extends Component {
	render () {
		return (
			<div className="App">
				<MainImg />
				<Thumbnails />
			</div>
		);
	}
}

export default App;
