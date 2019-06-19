import React from 'react';
//import colehaan1 from '../assets/colehaan1.jpg';

class mainImg extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="MainImg">
				<img src={this.props.data} />
			</div>
		);
	}

};

export default mainImg;
