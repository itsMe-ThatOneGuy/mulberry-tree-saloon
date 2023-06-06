import { Facebook } from 'react-feather';
<<<<<<< HEAD

const Footer = () => {
	return (
		<footer>
			<div>
				<div>MTS</div>

				<div>
					<p>
						© {new Date().getFullYear()} &middot; Mulberry Tree Saloon. All
						rights reserved.
					</p>
				</div>

=======
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

>>>>>>> styling
				<div>
					<a
						href="https://www.facebook.com/profile.php?id=100057060955346"
						target="_blank"
						rel="noreferrer"
					>
<<<<<<< HEAD
						<button>
							<Facebook size={20} />
=======
						<button className="mr-7 hover:text-blue-600">
							<Facebook size={25} />
>>>>>>> styling
						</button>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
