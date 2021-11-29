import React from "react";
import PropsTypes from "prop-types";

const Banner = props => {
	return (
		<div className="row ">
			<div className="col-sm-4">
				<div className="card">
					<div className="card-body bg-dark">
						<h5 className="card-title"></h5>
						<img
							className="col-sm-12"
							src="https://elcomercio.pe/resizer/q8HfpjFtS6_AAlNM9K8aiY1TjAA=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/4MQNB2QYVJHHHKEETPKU3BHXNM.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Banner;
