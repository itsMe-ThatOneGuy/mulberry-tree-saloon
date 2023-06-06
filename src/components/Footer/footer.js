import { Facebook } from 'react-feather';
const Footer = () => {
	return (
		<footer>
			<div className="relative bg-[#222] w-full flex justify-between py-3 text-white items-center font-medium md:text-lg">
				<div className="ml-7">
					M<span className="text-green-500">T</span>S
				</div>

				<div className="flex flex-col items-center">
					<p>
						© {new Date().getFullYear()} &middot; Mulberry{' '}
						<span className="text-green-500">Tree</span> Saloon.
					</p>
					<p>All rights reserved.</p>
				</div>
				<div>
					<a
						href="https://www.facebook.com/profile.php?id=100057060955346"
						target="_blank"
						rel="noreferrer"
					>
						<button className="mr-7 hover:text-blue-600">
							<Facebook size={25} />
						</button>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
