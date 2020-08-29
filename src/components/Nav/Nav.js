import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
	return (
		<nav>
			<Link to='/'>Back</Link>
			<span>{props.page}</span>
		</nav>
	);
}

export default Nav;
