import React, { useState, useEffect } from 'react';
import outsideMobile from '../../images/outside-mobile.jpg';
import outside from '../../images/outside.jpg';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [showFlicker, setShowFlicker] = useState(false);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const getBackgroundImage = () => {
		return `url("${windowWidth < 768 ? outsideMobile : outside}")`;
	};

	const MotionLink = motion(Link);

	return (
		<section className="h-screen flex items-center relative z-30" id="top">
			<div
				className="w-full h-full bg-cover shadow-inner"
				style={{ backgroundImage: getBackgroundImage() }}
			>
				<div className="h-full w-full bg-black bg-opacity-60 text-[#F0F7EE] flex flex-col justify-center items-center px-4 text-center shadow-inner relative overflow-hidden">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-widest drop-shadow animate-slowPulse"
					>
						Mulberry Tree Saloon
					</motion.h1>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.8 }}
						className="text-xl md:text-3xl lg:text-4xl uppercase pt-6 tracking-wider text-[#B0C4B1] drop-shadow-md animate-fadeGlow"
					>
						Home of
					</motion.h2>

					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.6, duration: 0.7 }}
						onAnimationComplete={() => setShowFlicker(true)}
						className={`text-[#8B1E1E] font-liquidism2 text-4xl md:text-5xl lg:text-7xl pt-4 uppercase ${
							showFlicker ? 'animate-flicker' : ''
						}`}
					>
						The City Morgue Restaurant
					</motion.h3>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.2, duration: 0.6 }}
						className="pt-10"
					>
						<MotionLink
							to="/menu"
							whileHover={{
								scale: 1.05,
								boxShadow: '0 0 20px rgba(139, 30, 30, 0.8)',
							}}
							whileTap={{ scale: 0.95 }}
							className="relative px-4 py-2 lg:px-8 lg:py-4 lg:text-lg uppercase font-bold tracking-widest rounded border-2 text-[#F0F7EE] hover:text-[#8B1E1E] border-[#8B1E1E] shadow-md transition-all duration-300"
							style={{
								background: 'rgba(0, 0, 0, 0.7)',
								textShadow: '0 0 3px #8B1E1E',
							}}
						>
							<span className="relative z-10">View the Menu</span>
							<span
								className="absolute inset-0 rounded animate-flicker"
								style={{
									boxShadow: '0 0 15px #8B1E1E',
									opacity: 0.2,
								}}
							></span>
						</MotionLink>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.8, duration: 0.6 }}
						className="absolute bottom-24"
					>
						<a
							href="#about"
							className="flex flex-col items-center text-[#71C13F] hover:opacity-80"
						>
							<ChevronDown className="w-8 h-8 animate-bounce" />
							<span className="text-xs uppercase tracking-widest mt-1">
								Scroll
							</span>
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
