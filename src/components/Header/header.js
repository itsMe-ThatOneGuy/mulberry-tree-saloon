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
			<div className="fixed flex w-full bg-[#222] items-center justify-between border-b border-white px-6 py-4 z-50">
				<div>
					<a
						className="text-3xl font-semibold text-white hover:text-green-600 transition-all ease-in duration-300"
						href="/"
					>
						M<span className="text-green-600">T</span>S
					</a>
				</div>

				<div>
					<nav>
						<ul className="hidden md:flex">
							<li>
								<a
									className="text-2xl hover:text-green-600 text-white mr-7 font-medium uppercase cursor-pointer transition-all ease-in-out duration-300"
									href="#about"
								>
									About
								</a>
							</li>
							<li>
								<a
									className="text-2xl hover:text-green-600 text-white mr-7 font-medium uppercase cursor-pointer transition-all ease-in-out duration-300"
									href="#menu"
								>
									Menu
								</a>
							</li>
							<li>
								<a
									className="text-2xl hover:text-green-600 text-white mr-7 font-medium uppercase cursor-pointer transition-all ease-in-out duration-300"
									href="#info"
								>
									Info
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div
					onClick={() => {
						handleClick();
					}}
					className="text-white cursor-pointer md:hidden"
				>
					{!mobileMenu ? (
						<Menu className="hover:text-green-600 transition-all ease-in-out duration-300" />
					) : (
						<X className="hover:text-green-600 transition-all ease-in-out duration-300" />
					)}
				</div>
			</div>

			<div className={!mobileMenu ? 'mobile-nav' : 'mobile-nav active'}>
				<ul className="relative flex-col items-center top-1/3 text-center uppercase text-white">
					<li className="block pb-14">
						<a
							className="hover:text-green-600 transition-all ease-in-out duration-300"
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
							className="hover:text-green-600 transition-all ease-in-out duration-300"
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
							className="hover:text-green-600 transition-all ease-in-out duration-300"
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
