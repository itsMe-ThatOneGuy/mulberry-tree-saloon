import stockHero from "../../images/stock-hero.jpg";

const Hero = () => {
	return (
		<section className="relative z-40 flex align-center h-screen">
			<div className="hero-container bg-black bg-opacity-[0.6]">
				<div
					style={{
						backgroundImage: `url("${stockHero}")`,
					}}
					className="bg-fixed bg-cover bg-center absolute top-0 left-0 w-full h-screen">
					<div className="bg-black bg-opacity-[0.6] h-screen flex flex-col justify-center items-center">
						<h1 className="z-[5] text-2xl md:text-5xl text-white font-bold uppercase tracking-[.2em] drop-shadow">
							Mulberry Tree
						</h1>
						<h1 className="z-[5] pt-12 text-2xl md:text-5xl text-white font-bold uppercase tracking-[.2em] drop-shadow">
							Saloon
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
