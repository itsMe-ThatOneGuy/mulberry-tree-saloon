import { Menu, X } from "react-feather";
import { useState } from "react";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	const handleClick = () => {
		toggleMobileMenu();
		console.log(mobileMenu);
	};

	return (
		<header className="sticky top-0 z-50 overflow-x-hidden">
			<div className="w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[#1b1b1b] border-b border-gray-300 text-white">
				<div className="logo">
					<a
						href="/"
						className="text-3xl font-semibold uppercase transition-all ease-in duration-500 hover:text-[#fe4039]">
						MTS
					</a>
				</div>

				<div className="navigation">
					<nav>
						<ul className="hidden md:flex">
							<li>
								<a href="#about" className="mr-2 md:mr-4">
									About
								</a>
							</li>
							<li>
								<a href="#menu" className="mr-2 md:mr-4">
									Menu
								</a>
							</li>
							<li>
								<a href="#info" className="mr-2 md:mr-4">
									Info
								</a>
							</li>
						</ul>

						<div
							onClick={() => {
								handleClick();
							}}
							className="md:hidden">
							{!mobileMenu ? <Menu /> : <X />}
							<ul
								className={
									!mobileMenu
										? "mobile-menu"
										: "mobile-menu active"
								}>
								<li>
									<a href="#about" className="mt-8 mb-4">
										About
									</a>
								</li>
								<li>
									<a href="#menu" className="my-4">
										Menu
									</a>
								</li>
								<li>
									<a href="#info" className="mt-4 mb-8">
										Info
									</a>
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
