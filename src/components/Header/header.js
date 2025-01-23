import { Menu, X } from 'react-feather';
import { useState, useEffect } from 'react';

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const updateHeaderVisibility = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY <= 0) {
				setIsHeaderVisible(true);
			} else if (currentScrollY > lastScrollY) {
				setIsHeaderVisible(false);
			} else {
				setIsHeaderVisible(true);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', updateHeaderVisibility);
		return () => window.removeEventListener('scroll', updateHeaderVisibility);
	}, []);

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
		<header
			className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${
				isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<div
				className={`flex w-full bg-[#222] items-center justify-between px-6 py-4 z-40 ${
					isSticky ? 'shadow-md' : ''
				}`}
			>
				<div className="z-50">
					<a
						className="text-3xl font-medium tracking-wide text-[#F0F7EE] hover:text-[#47A025] transition-all ease-in-out duration-300"
						href="#top"
					>
						M<span className="font-liquidism text-[#47A025]">T</span>S
					</a>
				</div>
				<div>
					<nav>
						<ul className="hidden sm:flex">
							<li>
								<a
									className="text-2xl hover:text-[#47A025] text-[#F0F7EE] mr-7 font-medium uppercase cursor-pointer transition-all ease-in-out duration-300"
									href="#about"
								>
									About
								</a>
							</li>
							<li>
								<a
									className="font-zomboi tracking-widest text-2xl hover:text-[#47A025] text-[#F0F7EE] mr-7 font-medium uppercase cursor-pointer transition-all ease-in-out duration-300"
									target="_blank"
									rel="noreferrer"
									href="https://qrfy.io/p/sBtOePJwpc?utm_source=qrcode&utm_medium=images&utm_campaign=35903903"
								>
									Menu
								</a>
							</li>
							<li>
								<a
									className="text-2xl hover:text-[#47A025] text-[#F0F7EE] mr-7 font-medium uppercase cursor-pointer transition-all ease-in-out duration-300"
									href="#info"
								>
									Info
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div
					onClick={handleClick}
					className="text-[#F0F7EE] cursor-pointer sm:hidden z-50"
				>
					{!mobileMenu ? (
						<Menu className="hover:text-[#47A025] transition-all ease-in-out duration-300" />
					) : (
						<X className="hover:text-[#47A025] transition-all ease-in-out duration-300" />
					)}
				</div>
			</div>
			<div className={`${!mobileMenu ? 'mobile-nav' : 'mobile-nav active'} `}>
				<ul className="relative flex-col items-center top-1/3 text-center uppercase text-[#F0F7EE]">
					<li className="block pb-14">
						<a
							className="underline underline-offset-8 decoration-[#47A025] hover:text-[#47A025] transition-all ease-in-out duration-300"
							onClick={handleClick}
							href="#about"
						>
							About
						</a>
					</li>
					<li className="block pb-14">
						<a
							className="font-zomboi tracking-widest underline underline-offset-8 decoration-[#E71D36] hover:text-[#47A025] transition-all ease-in-out duration-300"
							onClick={handleClick}
							target="_blank"
							rel="noreferrer"
							href="https://qrfy.io/p/sBtOePJwpc?utm_source=qrcode&utm_medium=images&utm_campaign=35903903"
						>
							Menu
						</a>
					</li>
					<li className="block pb-14">
						<a
							className="underline underline-offset-8 decoration-[#47A025] hover:text-[#47A025] transition-all ease-in-out duration-300"
							onClick={handleClick}
							href="#info"
						>
							Info
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
