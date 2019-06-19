import React, { Component } from 'react';
import MainImg from './MainImg.jsx';
import Thumbnails from './ThumbnailList.jsx';
import imageList from '../../../database/index.json';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = { imageData: [] };
	}

	componentDidMount () {
		let id = window.location.pathname.split('/')[1];
		id = parseInt(id);
		let image = imageList.ImageInfo.filter((ele) => ele.ProductId === id);
		this.setState({
			imageData: image
		});
		console.log('help');
		console.log(this.state.imageData[0].ImageURL);
	}

	render () {
		return (
			<div className="App">
				<MainImg ImageUrl={this.state.imageData[0].ImageURL} />
				<Thumbnails />
			</div>
		);
	}
}

export default App;
