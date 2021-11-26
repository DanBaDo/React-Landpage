import React from "react";
import PropTypes from "prop-types";

// Components
import Title from "./Title.jsx";
import ViewAllBtn from "./ViewAllBtn.jsx";
import Movie from "./Movie.jsx";

// Resources
import "../../styles/Section.scss";

const Section = props => {
	return (
		<div className="container-fluid sectionComponent">
			<div className="topBar">
				<Title title={props.title} />
				<ViewAllBtn
					showedNum={props.showedNum}
					totalNum={props.totalNum}
				/>
			</div>
			<div className="container-fluid items">{props.itemsToShow}</div>
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	showedNum: PropTypes.number,
	totalNum: PropTypes.number,
	itemsToShow: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Section;
