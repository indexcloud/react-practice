import React, {Component} from "react";

import classes from "./Header.module.css";

class Header extends Component {
	render() {
		return (
			<div className={classes.Header}>
				<h2>Header</h2>
				<ul className={classes.Nav}>
					<li>
						<a href="#">home</a>
					</li>
					<li>
						<a href="#">feed</a>
					</li>
					<li>
						<a href="#">faq</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
