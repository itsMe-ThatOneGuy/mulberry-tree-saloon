import Carousel from 'better-react-carousel';
import { motion } from 'framer-motion';

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

let imageArray = [
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

const shuffledArray = shuffleArray(imageArray);

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const CarouselItem = (img) => {
	return (
		<Carousel.Item>
			<img
				width="100%"
				className="h-[400px] sm:h-[350px] lg:h-[600px]"
				src={img}
				alt=""
			/>
		</Carousel.Item>
	);
};

const Gallery = () => {
	return (
		<div className="relative">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="flex justify-center lg:px-3"
			>
				<Carousel cols={3} rows={1} gap={10} loop autoplay={5000}>
					{shuffledArray.map((e) => CarouselItem(e))}
				</Carousel>
			</motion.div>
		</div>
	);
};

export default Gallery;
