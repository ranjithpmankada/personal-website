import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav(props) {
	return (
		<nav className='side_nav'>
			<Link to='/'>Back</Link>
			<span className='side_nav_page'>{props.page}</span>
		</nav>
	);
}

export default Nav;
