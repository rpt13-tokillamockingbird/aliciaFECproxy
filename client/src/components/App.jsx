import React, { Component } from 'react';
import MainImg from './MainImg.jsx';
import Thumbnails from './ThumbnailList.jsx';
import imageList from '../../../database/index.json';

//import { Discovery } from 'aws-sdk';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = { imageData: [] };
	}

	componentDidMount () {
		let id = window.location.pathname.split('/')[1];
		id = parseInt(id);
		let image = imageList.ImageInfo.filter((ele) => ele.ProductId === id);
		console.log(image, id);
	}
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
