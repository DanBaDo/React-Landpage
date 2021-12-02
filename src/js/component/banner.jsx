import React from "react";
import PropsTypes from "prop-types";

import "../../styles/Banner.scss";

const Banner = props => {
	return (
		<div className="col-sm-4 banner">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<img
						className="col-xl-12 col-4 bannerimg"
						src={props.imgSrc}
						alt={props.title}
					/>
				</div>
			</div>
		</div>
	);
};

Banner.propTypes = {
	imgSrc: PropsTypes.string.isRequired,
	title: PropsTypes.string.isRequired
};

export default Banner;
