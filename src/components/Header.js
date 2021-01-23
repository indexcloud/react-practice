import React from "react";

import classes from "./Header.module.css";

import {Link} from "react-router-dom";

const Header = props => {
	return (
		<div className={classes.Header}>
			<h2>Header</h2>
			<ul className={classes.Nav}>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/feed">feed</Link>
				</li>
				<li>
					<Link to="/faq">faq</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
