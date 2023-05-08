import { useState } from "react";

const Header = () => {
	return (
		<header>
			<div className="logo">MTS</div>

			<nav className="navigation">
				<ul>
					<li>
						<a>Our Story</a>
					</li>
					<li>
						<a>Menu</a>
					</li>
					<li>
						<a>Info</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
