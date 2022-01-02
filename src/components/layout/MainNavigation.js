import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>React Quotes</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to="/quotes"> All Quotes </NavLink>
					</li>
					<li>
						<NavLink to="/quotes"> Add A Quote </NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
