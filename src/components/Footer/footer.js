import { Facebook, Instagram } from 'react-feather';
const Footer = () => {
	return (
		<footer>
			<div className="relative bg-[#222] w-full flex justify-between py-3 text-[#F0F7EE] items-center font-medium md:text-lg">
				<div className="ml-7 text-lg">
					<a
						className="text-[#F0F7EE] hover:text-[#47A025] transition-all ease-in duration-300"
						href="#top"
					>
						M<span className="font-liquidism text-[#47A025]">T</span>S
					</a>
				</div>

				<div className="flex flex-col items-center">
					<div className="flex flex-col lg:flex-row items-center">
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
					<p>All rights reserved</p>
				</div>
				<div className="flex">
					<a
						href="https://www.facebook.com/profile.php?id=100057060955346"
						target="_blank"
						rel="noreferrer"
					>
						<button className=" lg:mr-3 hover:text-blue-600">
							<Facebook size={30} />
						</button>
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=100057060955346"
						target="_blank"
						rel="noreferrer"
					>
						<button className="mr-7 hover:text-[#DD2A7B]">
							<Instagram size={30} />
						</button>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
