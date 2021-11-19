import React from "react";

//include images into your bundle
import Title from "./Title.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<div className="tests">
				<h1>Component tests</h1>
				<p>Title component:</p>
				<Title title="Test"></Title>
				<hr />
			</div>
		</div>
	);
};

export default Home;
