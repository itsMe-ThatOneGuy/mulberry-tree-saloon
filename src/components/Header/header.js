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
		<header className="fixed top-0 left-0">
			<div className="fixed flex w-full bg-gray-600 items-center justify-between border-b border-black px-4 py-4 z-50">
				<div>
					<a className="text-3xl font-semibold" href="/">
						MTS
					</a>
				</div>

				<div>
					<nav>
						<ul className="hidden">
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
					</nav>
				</div>

				<div
					onClick={() => {
						handleClick();
					}}
					className="md:hidden"
				>
					{!mobileMenu ? <Menu /> : <X />}
				</div>
			</div>

			<div className={!mobileMenu ? 'mobile-nav' : 'mobile-nav active'}>
				<ul className="relative flex-col items-center top-1/3 text-center uppercase">
					<li className="block pb-14">
						<a
							onClick={() => {
								handleClick();
							}}
							href="#about"
						>
							About
						</a>
					</li>
					<li className="block pb-14">
						<a
							onClick={() => {
								handleClick();
							}}
							href="#menu"
						>
							Menu
						</a>
					</li>
					<li className="block pb-14">
						<a
							onClick={() => {
								handleClick();
							}}
							href="#info"
						>
							Info
						</a>
					</li>
				</ul>
				<div></div>
			</div>
		</header>
	);
};

export default Header;
