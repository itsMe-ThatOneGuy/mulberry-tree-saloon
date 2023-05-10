const Hero = () => {
	return (
		<section className="relative flex align-center h-screen">
			<div className="container">
				<div className="bg-fixed bg-cover bg-center absolute top-0 left-0 w-full h-full">
					<div className="h-screen flex flex-col justify-center items-center">
						<h1 className="z-[5] pt-12 text-2xl md:text-3xl text-[#222] font-normal uppercase tracking-[.2em] drop-shadow">
							Mulberry Tree
						</h1>
						<h1 className="z-[5] pt-12 text-2xl md:text-3xl text-[#222] font-normal uppercase tracking-[.2em] drop-shadow">
							Saloon
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
