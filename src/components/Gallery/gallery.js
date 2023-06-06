import Carousel from 'better-react-carousel';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';

const Gallery = () => {
	return (
		<div className="relative">
			<div className="flex justify-center lg:px-3">
				<Carousel cols={3} rows={1} gap={10} loop autoplay={5000}>
					<Carousel.Item>
						<img
							width="100%"
							className="h-[400px] lg:h-[600px]"
							src={image1}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							width="100%"
							className="h-[400px] lg:h-[600px]"
							src={image2}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							width="100%"
							className="h-[400px] lg:h-[600px]"
							src={image3}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							width="100%"
							className="h-[400px] lg:h-[600px]"
							src={image4}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							width="100%"
							className="h-[400px] lg:h-[600px]"
							src={image5}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							width="100%"
							className="h-[400px] lg:h-[600px]"
							src={image6}
							alt=""
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default Gallery;
