import { Menu, X } from 'react-feather';
import { useState } from 'react';

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	const handleClick = () => {
		toggleMobileMenu();
	};

	return (
		<header>
			<div>
				<div>
					<a href="/">MTS</a>
				</div>

				<div>
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

						<div
							onClick={() => {
								handleClick();
							}}
						>
							{!mobileMenu ? <Menu /> : <X />}
							<ul
								className={!mobileMenu ? 'mobile-menu' : 'mobile-menu active'}
							>
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
			</div>
		</header>
	);
};

export default Header;
