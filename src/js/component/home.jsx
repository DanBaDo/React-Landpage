import React from "react";

//Components
import Title from "./Title.jsx";
import Movie from "./Movie.jsx";
import Section from "./Section.jsx";

//Resources
import image from "../../img/rigo-baby.jpg";

const movies = [
	{
		imgSrc: image,
		alt: "Linda foto",
		rating: "5.0",
		title: "Corre que te las pelas",
		year: "2043"
	},
	{
		imgSrc: image,
		alt: "Foto fea",
		rating: "4.1",
		title: "Cosas pequeñas",
		year: "1999"
	},
	{
		imgSrc: image,
		alt: "Big robot",
		rating: "2.3",
		title: "Robocop XXXIV",
		year: "2031"
	},
	{
		imgSrc: image,
		alt: "La llegada de los pollos del espacio",
		rating: "9.7",
		title: "Cosas pequeñas",
		year: "1999"
	},
	{
		imgSrc: image,
		alt: "Foto fea",
		rating: "4.1",
		title: "Cosas pequeñas",
		year: "1999"
	},
	{
		imgSrc: image,
		alt: "Foto fea",
		rating: "4.1",
		title: "Cosas pequeñas",
		year: "1999"
	}
];

const movieComponets = movies.map((obj, idx) => (
	<Movie
		key={idx}
		imgSrc={obj.imgSrc}
		alt={obj.alt}
		rating={obj.rating}
		title={obj.title}
		year={obj.year}></Movie>
));

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<div className="tests">
				<h1>Component tests</h1>
				<p>Title component:</p>
				<Title title="Test"></Title>
				<hr />
				<p>Section test</p>
				<Section
					title="Probando una sección"
					movies={movieComponets}></Section>
				<hr />
			</div>
		</div>
	);
};

export default Home;
