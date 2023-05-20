import { Facebook } from "react-feather";

const Footer = () => {
	return (
		<footer>
			<div className="realitive z-50 bottom-0 left-0 w-full flex justify-between items-center p-3 bg-[#1b1b1b] border-t border-gray-300 text-white">
				<div className="logo">MTS</div>

				<div className="text-xs md:text-base font-normal tracking-wider">
					<p>
						© {new Date().getFullYear()} &middot; Mulberry Tree
						Saloon. All rights reserved.
					</p>
				</div>

				<div className="flex justify-center items-center">
					<a
						href="https://www.facebook.com/profile.php?id=100057060955346"
						target="_blank"
						rel="noreferrer">
						<button className="h-[35px] inline-flex items-center ml-1 md:ml-2 text-white hover:text-[#fe4039] ">
							<Facebook size={20} />
						</button>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
