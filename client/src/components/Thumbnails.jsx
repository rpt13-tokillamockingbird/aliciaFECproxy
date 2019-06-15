import React, { Component } from 'react';
import colehaan2mini from '../assets/colehaan2mini.jpg';
import colehaan3mini from '../assets/colehaan3mini.jpg';
import colehaan4mini from '../assets/colehaan4mini.jpg';
import colehaan5mini from '../assets/colehaan5mini.jpg';

class Thumbnails extends Component {
	render () {
		return (
			<div className="Thumbnails">
				<img src={colehaan2mini} />
        <img src={colehaan3mini} />
        <img src={colehaan4mini} />
        <img src={colehaan5mini} />
			</div>
		);
	}
}

export default Thumbnails;
