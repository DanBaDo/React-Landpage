import React from "react";

// Components

const Welcome = props => {
	return (
		<div
			id="carouselExampleSlidesOnly"
			className="carousel slide"
			data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
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
