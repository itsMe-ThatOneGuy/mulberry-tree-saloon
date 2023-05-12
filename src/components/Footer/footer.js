import { Facebook } from "react-feather";

const Footer = () => {
	return (
		<footer>
			<div>
				<div>MTS</div>

				<div>
					<p>
						© {new Date().getFullYear()} &middot; Mulberry Tree
						Saloon. All rights reserved.
					</p>
				</div>

				<div>
					<a
						href="https://www.facebook.com/profile.php?id=100057060955346"
						target="_blank"
						rel="noreferrer">
						<button>
							<Facebook size={20} />
						</button>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
