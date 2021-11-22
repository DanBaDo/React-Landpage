import React from "react";

//Components
import Title from "./Title.jsx";
import Movie from "./Movie.jsx";
import Section from "./Section.jsx";

//Resources
import image from "../../img/rigo-baby.jpg";

const movies = [
	{
		imgSrc: "https://picsum.photos/200/300.webp",
		alt: "Linda foto.",
		rating: "5.0",
		title: "Corre y no pares.",
		year: "2043"
	},
	{
		imgSrc: "https://picsum.photos/200/300.webp",
		alt: "Foto fea.",
		rating: "4.1",
		title: "Cosas pequeñas.",
		year: "1999"
	},
	{
		imgSrc: "https://picsum.photos/200/300.webp",
		alt: "Big robot.",
		rating: "2.3",
		title: "Robocop XXXIV",
		year: "2031"
	},
	{
		imgSrc: "https://picsum.photos/200/300.webp",
		alt: "Pollo espacial comiendo maíz.",
		rating: "9.7",
		title: "La llegada de los pollos del espacio.",
		year: "2021"
	},
	{
		imgSrc: "https://picsum.photos/200/300.webp",
		alt: "Tunos comen berenjena en la playa.",
		rating: "2.0",
		title: "Recuerdos del año que viene.",
		year: "1999"
	},
	{
		imgSrc: "https://picsum.photos/200/300.webp",
		alt: "Tipo colgando de canalón de desagüe.",
		rating: "10.0",
		title: "El loco de mi vecino.",
		year: "2022"
	}
];

const movieComponets = movies.map((obj, idx) => (
	<Movie
		key={idx}
		imgSrc={`${obj.imgSrc}?random=${idx}`}
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
