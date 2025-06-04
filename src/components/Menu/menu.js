import React, { useState } from 'react';
import menuData from '../../data/menuData';
import { motion } from 'framer-motion';
import noise from '../../images/noise.png';

const RestaurantMenu = () => {
	const [selectedCategory, setSelectedCategory] = useState(
		menuData[0].category,
	);

	const activeItems =
		menuData.find((section) => section.category === selectedCategory)?.items ||
		[];

	return (
		<section
			id="menu"
			className="pt-28 bg-[#1E1E1E] bg-blend-overlay bg-opacity-90 shadow-inner"
			style={{ backgroundImage: `url(${noise})` }}
		>
			<div className="max-w-4xl px-4 py-10 mx-auto text-white">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="font-liquidism2 text-[#8B1E1E] text-center text-4xl md:text-6xl tracking-widest uppercase drop-shadow mb-16 animate-slowPulse"
				>
					Over 40 Wayz To Die...
				</motion.h1>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className="flex flex-wrap justify-center gap-4 mb-10"
				>
					{menuData.map(({ category }) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`md:text-lg px-5 py-2 rounded-full border-2 font-zomboi tracking-wider transition-all duration-200 shadow-sm hover:scale-105 ease-in-out hover:shadow-lg hover:shadow-[#8B1E1E]/50 ${
								category === selectedCategory
									? 'bg-[#8B1E1E] text-white border-[#E71D36] shadow-md shadow-[#8B1E1E]/50'
									: 'bg-transparent text-[#E71D36] border-[#E71D36] hover:bg-[#8B1E1E] hover:text-white'
							}`}
						>
							{category}
						</button>
					))}
				</motion.div>

				<motion.ul
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="space-y-6 sm:px-4"
				>
					{activeItems.map((item, i) => (
						<li key={i} className="text-white border-b border-[#47A025] pb-6">
							<div className="flex justify-between items-start gap-4">
								{/* Name + Description block */}
								<div className="flex-1">
									<div className="flex justify-between items-baseline">
										<h3 className="text-xl tracking-wide font-liquidism2 text-[#8B1E1E] mb-1">
											{item.name}
										</h3>
										<div className="text-sm font-bold text-[#C86368] whitespace-pre-line text-right">
											{item.price}
										</div>
									</div>
									<div className="text-sm text-gray-300 whitespace-pre-line italic">
										{item.description}
									</div>
								</div>
							</div>
						</li>
					))}
				</motion.ul>

				<p className="pt-10 text-sm text-center text-[#E71D36] italic">
					⚠ *Consuming raw or undercooked foods may increase your risk of
					foodborne illness.
				</p>
			</div>
		</section>
	);
};

export default RestaurantMenu;
