import React from "react";
import PropTypes from "prop-types";

// Components
import Title from "./Title.jsx";
import Movie from "./Movie.jsx";

// Resources
import "../../styles/Section.scss";

const Section = props => {
	return (
		<div className="container-fluid">
			<Title title={props.title}></Title>
			<div className="container-fluid movies">{props.movies}</div>
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	movies: PropTypes.arrayOf(Movie).isRequired
};

export default Section;
