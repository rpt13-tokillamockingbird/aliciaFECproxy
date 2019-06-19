import React from 'react';
//import colehaan1 from '../assets/colehaan1.jpg';

const mainImg = (props) => {
	if (props.ImageURL) {
		return (
			<div className="MainImg">
				<img src={props.ImageURL} />
			</div>
		);
	} else {
		return <div />;
	}
};

export default mainImg;
