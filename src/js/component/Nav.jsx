import React from "react";
import PropsType from "prop-types";
import "../../styles/Nav.scss";

const NavTab = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-none">
			<div className="container-fluid">
				<a className="navbar-brand text-light " href="#">
					Video Club
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active text-light"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-light"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Peliculas
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item " href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Aventuras
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Ciencia Ficcion
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Comedia
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										No Ficcion
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Drama
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-light"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Series
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Aventuras
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Ciencia Ficcion
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Comedia
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										No Ficcion
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Drama
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled text-light"
								href="#"
								tabIndex="-1"
								aria-disabled="true">
								Estrenos
							</a>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"></input>
						<button
							className="btn btn-outline-success"
							type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
export default NavTab;
