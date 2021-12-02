import React from "react";
import PropTypes from "prop-types";

// Resources
import "../../styles/ViewAllBtn.scss";

const ViewAllBtn = props => {
	let numbers = props.showedNum ? props.showedNum.toString() : "";
	numbers = props.totalNum ? numbers + `/ ${props.totalNum}` : numbers;

	return (
		<div className="viewAllButton">
			<p>{numbers}</p> <button>Ver todo</button>
		</div>
	);
};

ViewAllBtn.propTypes = {
	showedNum: PropTypes.number,
	totalNum: PropTypes.number
};

export default ViewAllBtn;
