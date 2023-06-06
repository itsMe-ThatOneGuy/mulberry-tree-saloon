<<<<<<< HEAD
import stockHero from '../../images/stock-hero.jpg';

const Hero = () => {
	return (
		<section>
			<div>
				<div
					style={{
						backgroundImage: `url("${stockHero}")`,
					}}
				>
					<div>
						<h1>Mulberry Tree</h1>
						<h1>Saloon</h1>
=======
import heroImage from '../../images/heroImage.jpg';

const Hero = () => {
	return (
		<section className="relative flex items-center h-screen z-30">
			<div>
				<div
					className="bg-fixed bg-contain bg-center absolute top-0 left-0 w-full h-full md:bg-cover"
					style={{ backgroundImage: `url("${heroImage}")` }}
				>
					<div className="bg-black bg-opacity-60 h-screen flex flex-col justify-center items-center">
						<h1 className="text-white text-3xl font-bold uppercase tracking-[.2em] drop-shadow md:text-5xl lg:text-8xl">
							Mulberry <span className="text-green-500">Tree</span>
						</h1>
						<h1 className="text-white text-3xl font-bold uppercase tracking-[.2em] edrop-shadow pt-12 md:text-5xl lg:text-8xl">
							Saloon
						</h1>
>>>>>>> styling
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
