import { Menu, X } from 'react-feather';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
	{
		label: 'About',
		to: '/#about',
		font: 'font-liquidism2',
		decoration: '#47A025',
	},
	{
		label: 'Menu',
		to: '/menu',
		font: 'font-zomboi',
		decoration: '#E71D36',
	},
	{
		label: 'Info',
		to: '/#info',
		font: 'font-liquidism2',
		decoration: '#47A025',
	},
];

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
			setIsHeaderVisible(currentScrollY <= 0 || currentScrollY < lastScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', updateHeaderVisibility);
		return () => window.removeEventListener('scroll', updateHeaderVisibility);
	}, []);

	useEffect(() => {
		const body = document.querySelector('body');
		if (mobileMenu) {
			body?.classList.add('active');
		} else {
			body?.classList.remove('active');
		}
	}, [mobileMenu]);

	const toggleMobileMenu = () => {
		setMobileMenu((prev) => !prev);
	};

	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location.hash]);

	return (
		<header
			className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 shadow-lg shadow-[#3b0764]/30 ${
				isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<div
				className={`flex w-full bg-gradient-to-r from-black via-[#1a001f] to-black items-center justify-between px-6 py-4 z-40 ${
					isSticky ? 'shadow-md' : ''
				}`}
			>
				<Link
					className="font-liquidism2 text-3xl font-medium tracking-widest text-[#F0F7EE] hover:text-[#47A025] transition-all ease-in-out duration-300 z-50"
					to="/#top"
				>
					M<span className="font-liquidism text-[#47A025]">T</span>S
				</Link>

				<nav className="hidden sm:flex space-x-7">
					{NAV_LINKS.map(({ label, to, font }) => (
						<Link
							key={label}
							to={to}
							className={`${font} text-3xl tracking-widest text-[#F0F7EE] font-medium uppercase cursor-pointer transition-all ease-in-out duration-300 hover:text-[#47A025]`}
						>
							{label}
						</Link>
					))}
				</nav>

				<button
					onClick={toggleMobileMenu}
					className="text-[#F0F7EE] cursor-pointer sm:hidden z-50"
					aria-expanded={mobileMenu}
					aria-label="Toggle mobile menu"
				>
					{!mobileMenu ? (
						<Menu className="hover:text-[#47A025] transition-all duration-300" />
					) : (
						<X className="hover:text-[#47A025] transition-all duration-300" />
					)}
				</button>
			</div>

			<div
				className={`mobile-nav ${mobileMenu ? 'active' : ''} text-3xl backdrop-blur-sm bg-black/80`}
			>
				<ul
					className={`flex flex-col items-center justify-center pt-28 space-y-14 text-[#F0F7EE] text-3xl transition-all duration-500 ease-in-out transform ${
						mobileMenu
							? 'opacity-100 translate-y-0'
							: 'opacity-0 -translate-y-8'
					}`}
				>
					{NAV_LINKS.map(({ label, to, font, decoration }) => (
						<li key={label}>
							<Link
								to={to}
								onClick={toggleMobileMenu}
								className={`${font} tracking-widest underline underline-offset-8 decoration-[${decoration}] hover:text-[#47A025] transition-all duration-300 drop-shadow-md`}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="absolute bottom-[-12px] left-0 w-full h-8 blur-xl bg-[#5B0A91] opacity-60 pointer-events-none z-[-1]"></div>
		</header>
	);
};

export default Header;
