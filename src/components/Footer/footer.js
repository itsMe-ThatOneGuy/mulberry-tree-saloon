import { Facebook } from "react-feather";

const Footer = () => {
	return (
		<footer>
			<div className="logo">MTS</div>

			<div className="text">
				<p>
					© {new Date().getFullYear()} &middot; Mulberry Tree Saloon.
					All rights reserved.
				</p>
			</div>

			<div className="socials">
				<a
					href="https://www.facebook.com/profile.php?id=100057060955346"
					target="_blank"
					rel="noreferrer">
					<button>
						<Facebook />
					</button>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
