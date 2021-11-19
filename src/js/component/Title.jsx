import React from "react";
import PropTypes from "prop-types";

import "../../styles/Title.scss";

export default function Title(props) {
	return <h1 className="Title">{props.title}</h1>;
}

Title.propTypes = {
	title: PropTypes.string.isRequired
};
