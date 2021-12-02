import React from "react";

//Components
import Movie from "./Movie.jsx";
import Section from "./Section.jsx";
import NavTab from "./Nav.jsx";
import Welcome from "./Welcome.jsx";
import Banner from "./banner.jsx";

//Resources
import "../../styles/home.scss";

// Searching for component? Go to #207 👇

// Mockup data

const moviesHD = [
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

const series = [
	{
		imgSrc: "https://picsum.photos/450/253.webp",
		title: "No more, please."
	},
	{
		imgSrc: "https://picsum.photos/450/253.webp",
		title: "It's crazy."
	},
	{
		imgSrc: "https://picsum.photos/450/253.webp",
		title: "Los hombres de Francisco."
	}
];

const moviesOnline = [
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
	},
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

// Components arrays for props

const movieHDComponets = moviesHD.map((obj, idx) => (
	<Movie
		key={idx}
		imgSrc={`${obj.imgSrc}?random=${idx}`}
		alt={obj.alt}
		rating={obj.rating}
		title={obj.title}
		year={obj.year}
	/>
));

const seriesComponets = series.map((obj, idx) => (
	<Banner
		key={idx}
		imgSrc={`${obj.imgSrc}?random=${idx}`}
		title={obj.title}
	/>
));

const movieOnlineComponets = moviesOnline.map((obj, idx) => (
	<Movie
		key={idx}
		imgSrc={`${obj.imgSrc}?random=${idx + 6}`}
		alt={obj.alt}
		rating={obj.rating}
		title={obj.title}
		year={obj.year}
	/>
));

const movieRecomendedComponets = moviesOnline.map((obj, idx) => (
	<Movie
		key={idx}
		imgSrc={`${obj.imgSrc}?random=${idx + 18}`}
		alt={obj.alt}
		rating={obj.rating}
		title={obj.title}
		year={obj.year}
	/>
));

// Component

const Home = () => {
	return (
		<div className="container-md">
			<div className="row mainRow">
				<div className="col-12 col-lg-8 mainCol">
					<NavTab />
					<Welcome />
					<Section
						title="Nuevos estrenos en HD"
						showedNum={6}
						totalNum={358}
						itemsToShow={movieHDComponets}
					/>
					<Section
						title="Series añadidas o actualizadas"
						showedNum={3}
						totalNum={1231}
						itemsToShow={seriesComponets}
					/>
					<Section
						title="Nuevas películas disponibles online"
						showedNum={12}
						totalNum={1652}
						itemsToShow={movieOnlineComponets}
					/>
					<Section
						title="Películas destacadas/recomendadas"
						showedNum={6}
						totalNum={112}
						itemsToShow={movieHDComponets}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
