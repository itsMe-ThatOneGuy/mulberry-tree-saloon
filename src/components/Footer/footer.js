import { Facebook } from 'react-feather';

const Footer = () => {
	return (
		<footer>
			<div className="relative bg-green-500 w-full flex justify-between py-3 text-white items-center">
				<div className="ml-7">MTS</div>

				<div className="flex flex-col items-center">
					<p>© {new Date().getFullYear()} &middot; Mulberry Tree Saloon.</p>
					<p>All rights reserved.</p>
				</div>

				<div>
					<a
						href="https://www.facebook.com/profile.php?id=100057060955346"
						target="_blank"
						rel="noreferrer"
					>
						<button className="mr-7">
							<Facebook size={20} />
						</button>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
