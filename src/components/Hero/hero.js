import heroImage from '../../images/heroImage.jpg';

const Hero = () => {
	return (
		<section className="relative flex items-center h-screen z-30">
			<div>
				<div
					className="bg-fixed bg-contain md:cover bg-center absolute top-0 left-0 w-full h-full"
					style={{ backgroundImage: `url("${heroImage}")` }}
				>
					<div className="bg-black bg-opacity-60 h-screen flex flex-col justify-center items-center">
						<h1 className="text-white text-2xl font-bold uppercase tracking-[.2em] drop-shadow">
							Mulberry Tree
						</h1>
						<h1 className="text-white text-2xl font-bold uppercase tracking-[.2em] edrop-shadow pt-12">
							Saloon
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
