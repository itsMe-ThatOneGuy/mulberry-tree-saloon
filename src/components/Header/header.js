import { Menu } from "react-feather";

const Header = () => {
	return (
		<header>
			<div>
				<div>
					<a href="/">MTS</a>
				</div>
				<nav>
					<ul>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#menu">Menu</a>
						</li>
						<li>
							<a href="#info">Info</a>
						</li>
					</ul>

					<div>
						<Menu />
						<ul>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#menu">Menu</a>
							</li>
							<li>
								<a href="#info">Info</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
