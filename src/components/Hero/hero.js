import React, { useState, useEffect } from 'react';
import outsideMobile from '../../images/outside-mobile.jpg';
import outside from '../../images/outside.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const getBackgroundImage = () => {
		if (windowWidth < 768) {
			return `url("${outsideMobile}")`;
		} else {
			return `url("${outside}")`;
		}
	};

	return (
		<section className="relative flex items-center h-screen z-30">
			<div>
				<div
					className="bg-fixed bg-contain bg-center absolute top-0 left-0 w-full h-full md:bg-cover"
				>
					<div className="bg-black bg-opacity-70 h-screen flex flex-col justify-center items-center">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.05, duration: 2 }}
							className=" flex flex-col justify-center items-center"
						>
							<h1 className="text-white text-3xl font-bold uppercase tracking-[.2em] drop-shadow md:text-5xl lg:text-8xl">
								Mulberry <span className="text-green-500">Tree</span>
							</h1>
							<h1 className="text-white text-3xl font-bold uppercase tracking-[.2em] edrop-shadow pt-12 md:text-5xl lg:text-8xl">
								Saloon
							</h1>
						</motion.div>
					</div>
				style={{ backgroundImage: getBackgroundImage() }}
				</div>
			</div>
		</section>
	);
};

export default Hero;
