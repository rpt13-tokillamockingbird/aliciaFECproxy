import React, { Component } from 'react';
import colehaan2 from '../assets/colehaan2.jpg';
import colehaan3 from '../assets/colehaan3.jpg';
import colehaan4 from '../assets/colehaan4.jpg';
import colehaan5 from '../assets/colehaan5.jpg';

class Thumbnails extends Component {
	render () {
		return (
			<div className="Thumbnails">
				<img src={colehaan2} />
        <img src={colehaan3} />
        <img src={colehaan4} />
        <img src={colehaan5} />
			</div>
		);
	}
}

export default Thumbnails;
