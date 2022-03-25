import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faShoppingCart,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../Css/Navbar.css";

function Navbar() {
	const location = useLocation();
	const [MenuToggle, setMenuToggle] = useState(false);
	return (
		<div id="Navbar">
			<img
				src={`${process.env.PUBLIC_URL}/Images/Logo2.png`}
				alt="Logo"
				width="100px"
			/>
			<nav className={MenuToggle ? "Open" : null}>
				<Link to="/" className={location.pathname === "/" ? "Underline" : null}>
					Home
				</Link>
				<Link
					to="/Shop"
					className={location.pathname === "/Shop" ? "Underline" : null}
				>
					Shop
				</Link>
				<Link
					to="/Contact"
					className={location.pathname === "/Contact" ? "Underline" : null}
				>
					Contact
				</Link>
				<Link
					to="/About"
					className={location.pathname === "/About" ? "Underline" : null}
				>
					About
				</Link>
				<Link
					to="/SignIn"
					className={location.pathname === "/SignIn" ? "Underline" : null}
				>
					Sign In
				</Link>
				<FontAwesomeIcon icon={faShoppingCart} fontSize="2.8rem" />
			</nav>
			<button
				onClick={() => {
					setMenuToggle(!MenuToggle);
				}}
			>
				<FontAwesomeIcon icon={MenuToggle ? faTimes : faBars} />
			</button>
		</div>
	);
}

export default Navbar;
