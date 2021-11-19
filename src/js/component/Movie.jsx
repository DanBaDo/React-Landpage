import React from "react";
import PropTypes from "prop-types";

import "../../styles/Movie.scss";

const Movie = props => {
	return (
		<div className="card col-4 col-xl-2 movie">
			<div className="imgWrapper">
				<img
					src={props.imgSrc}
					className="card-img-top"
					alt={props.alt}
				/>
				<p className="rating">⭐ {props.rating}</p>
			</div>
			<div className="card-body">
				<h2 className="card-title title">{props.title}</h2>
				<p className="card-text year">{props.year}</p>
			</div>
		</div>
	);
};

Movie.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	rating: PropTypes.string.isRequired
};

export default Movie;
