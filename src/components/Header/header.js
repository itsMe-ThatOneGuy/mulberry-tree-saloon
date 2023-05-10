const Header = () => {
	return (
		<header>
			<div className="fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[#1b1b1b] border-b border-gray-300 text-white">
				<div className="logo">
					<a
						href="/"
						className="text-3xl font-semibold uppercase transition-all ease-in duration-500 hover:text-[#fe4039]">
						MTS
					</a>
				</div>

				<nav className="navigation">
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
				</nav>
			</div>
		</header>
	);
};

export default Header;
