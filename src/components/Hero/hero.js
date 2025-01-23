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
		<section
			className="relative flex items-center sm:pt-16 min-h-screen z-30"
			id="top"
		>
			<div
				className=" w-full h-full bg-cover"
				style={{ backgroundImage: getBackgroundImage() }}
			>
				<div className="bg-[#071108] bg-opacity-60 h-screen flex flex-col justify-center items-center">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.7, ease: 'linear' }}
						className=" flex flex-col justify-center items-center"
					>
						<h1 className="text-[#F0F7EE] text-3xl font-bold uppercase tracking-wide lg:tracking-[.1em] drop-shadow md:text-5xl lg:text-8xl">
							Mulberry{' '}
							<span className="font-liquidism2 tracking-widest text-[#47A025]">
								Tree
							</span>
						</h1>
						<h1 className="text-[#F0F7EE] text-3xl font-bold uppercase tracking-wide lg:tracking-[.1em] edrop-shadow pt-8 md:text-5xl lg:text-8xl">
							Saloon
						</h1>
					</motion.div>
					<motion.div
						initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
						animate={{
							clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
						}}
						transition={{ delay: 0.7, duration: 0.7, ease: 'linear' }}
						className=" flex flex-col justify-center items-center pt-12"
					>
						<h1 className="text-[#F0F7EE] text-3xl font-bold uppercase tracking-[.1em] lg:tracking-[.1em] drop-shadow md:text-5xl lg:text-8xl">
							Featuring
						</h1>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.7, duration: 0.7, ease: 'linear' }}
						className=" flex flex-col justify-center items-center pt-12"
					>
						<h1 className="text-[#F0F7EE] text-3xl font-bold uppercase tracking-wide lg:tracking-[.1em] drop-shadow md:text-5xl lg:text-8xl">
							The City{' '}
							<span className="font-zomboi text-[#E71D36]">Morgue</span>
						</h1>
						<h1 className="text-[#F0F7EE] text-3xl font-bold uppercase tracking-[.1em] lg:tracking-[.1em] edrop-shadow pt-8 md:text-5xl lg:text-8xl">
							Kitchen
						</h1>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
