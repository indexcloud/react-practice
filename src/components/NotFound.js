import React, {Component} from "react";

import classes from "./Page.module.css";

class NotFound extends Component {
	render() {
		return (
			<div className={classes.Page}>
				<h2>404 Page not found!</h2>
			</div>
		);
	}
}

export default NotFound;
