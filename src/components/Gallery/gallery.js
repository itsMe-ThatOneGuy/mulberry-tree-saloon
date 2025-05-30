import Carousel from 'better-react-carousel';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';
import image10 from '../../images/image10.jpg';
import image11 from '../../images/image11.jpg';
import image12 from '../../images/image12.jpg';
import image13 from '../../images/image13.jpg';
import image14 from '../../images/image14.jpg';
import image15 from '../../images/image15.jpg';
import image16 from '../../images/image16.jpg';
import image17 from '../../images/image17.jpg';
import image18 from '../../images/image18.jpg';

const images = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image15,
	image16,
	image17,
	image18,
];

function shuffleArray(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

const Gallery = () => {
	const shuffledImages = shuffleArray(images);

	return (
		<section id="gallery" className="py-10 px-4 md:px-12 lg:px-24">
			{/* Mobile Carousel */}
			<div className="sm:hidden">
				<Carousel cols={1} rows={1} gap={10} loop autoplay={4000}>
					{shuffledImages.slice(0, 8).map((img, index) => (
						<Carousel.Item key={index}>
							<div className="h-72 overflow-hidden rounded-xl shadow-md">
								<img
									src={img}
									alt={`Gallery ${index + 1}`}
									loading="lazy"
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
								/>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</div>

			{/* Desktop Carousel */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.2 }}
				viewport={{ once: true }}
				className="relative hidden sm:block"
			>
				<Carousel
					cols={3}
					rows={1}
					gap={10}
					loop
					autoplay={5000}
					arrowLeft={
						<div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-6">
							<button className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full">
								<ChevronLeft size={24} />
							</button>
						</div>
					}
					arrowRight={
						<div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-6">
							<button className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full">
								<ChevronRight size={24} />
							</button>
						</div>
					}
				>
					{shuffledImages.map((img, index) => (
						<Carousel.Item key={index}>
							<div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-md px-2">
								<img
									src={img}
									alt={`Gallery ${index + 1}`}
									loading="lazy"
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
								/>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</motion.div>
		</section>
	);
};

export default Gallery;
