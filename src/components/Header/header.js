import { Menu, X } from 'react-feather';
import { useState } from 'react';

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const body = document.querySelector('body');
	const toggleBodyOverflow = () => {
		!mobileMenu
			? body.classList.add('active')
			: body.classList.remove('active');
	};

	const toggleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
		toggleBodyOverflow();
	};

	const handleClick = () => {
		toggleMobileMenu();
	};
	return (
		<header className="fixed top-0 left-0 z-40">
			<div className="fixed flex w-full bg-gray-600 items-center justify-between border-b border-black px-6 py-4 z-50">
				<div>
					<a
						className="text-3xl font-semibold text-white hover:text-red-600"
						href="/"
					>
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
					className="text-white hover:text-red-600 cursor-pointer md:hidden"
				>
					{!mobileMenu ? <Menu /> : <X />}
				</div>
			</div>

			<div className={!mobileMenu ? 'mobile-nav' : 'mobile-nav active'}>
				<ul className="relative flex-col items-center top-1/3 text-center uppercase text-white">
					<li className="block pb-14">
						<a
							className="hover:text-red-600"
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
							className="hover:text-red-600"
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
							className="hover:text-red-600"
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
