import { Facebook, Instagram } from 'react-feather';
import { Link } from 'react-router-dom';

const Footer = () => (
	<footer>
		<div className="relative w-full flex flex-col lg:flex-row justify-between items-center px-6 py-4 text-[#F0F7EE] font-medium md:text-lg bg-gradient-to-r from-black via-[#1a001f] to-black shadow-lg shadow-[#3b0764]/30 border-t border-[#3b0764]/50">
			<div className="mb-2 lg:mb-0 lg:ml-0 text-lg">
				<Link
					className="font-liquidism2 text-[#F0F7EE] hover:text-[#47A025] transition-all ease-in-out duration-300"
					to="/#top"
				>
					M<span className="font-liquidism text-[#47A025]">T</span>S
				</Link>
			</div>

			<div className="text-center">
				<div className="flex flex-col lg:flex-row items-center gap-1">
					<div className="flex">
						<p className="pr-1">© {new Date().getFullYear()}</p>
						<p className="pr-1 hidden lg:inline"> &middot; </p>
					</div>
					<p>
						Mulberry{' '}
						<span className="font-liquidism2 tracking-wide text-[#47A025]">
							Tree
						</span>{' '}
						Saloon
					</p>
				</div>
				<p className="text-sm opacity-70">All rights reserved</p>
			</div>

			<div className="flex mt-2 lg:mt-0 space-x-4">
				<a
					href="https://www.facebook.com/profile.php?id=100057060955346"
					target="_blank"
					rel="noreferrer"
					className="hover:text-blue-600 transition-colors duration-300"
				>
					<Facebook size={26} />
				</a>
				<a
					href="https://www.instagram.com/mulberrytreesaloon/"
					target="_blank"
					rel="noreferrer"
					className="hover:text-[#DD2A7B] transition-colors duration-300"
				>
					<Instagram size={26} />
				</a>
			</div>
		</div>
	</footer>
);

export default Footer;
