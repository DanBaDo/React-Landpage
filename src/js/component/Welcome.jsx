import React from "react";
import PropTypes from "prop-types";

// Components

const Welcome = props => {
	return (
		<div
			id="carouselExampleSlidesOnly"
			classNameName="carousel slide"
			data-bs-ride="carousel">
			<div classNameName="carousel-inner">
				<div classNameName="carousel-item active">
					<img
						src="https://as.com/meristation/imagenes/2021/07/02/reportajes/1625238771_202608_1625238808_noticia_normal.jpg"
						className="d-block w-100"
						alt="Welcome"></img>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
