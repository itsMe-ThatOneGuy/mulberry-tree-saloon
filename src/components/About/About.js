import { motion } from 'framer-motion';

const About = () => {
	return (
		<section id="about" className="w-full h-full scroll-m-12">
			<div className="mb-5">
				<div className="bg-[#071108] py-3">
					<div className="flex flex-col items-center pb-10 px-10 lg:mx-80">
						<motion.h2
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
							className="font-liquidism font-bold pb-10 mt-7 text-[#47A025] text-2xl text-center uppercase tracking-widest lg:text-3xl"
						>
							- Dare to Enter -
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.25 }}
							viewport={{ once: true }}
							className="text-white text-center lg:text-xl font-normal"
						>
							<p className="pb-3">
								Welcome to The Mulberry Tree Saloon, where the undead come alive
								and the drinks never die. Nestled in the heart of Marionville,
								Missouri, we’re not your average small-town watering hole—we're
								a full-on zombie-themed experience where every night is a
								thriller.
							</p>
							<p className="pb-3">
								Whether you're dropping in for a cold one after work or looking
								for a wild night of live music, karaoke, or billards with some
								friends, there's always something happening at the Tree. Our
								regulars are legends, our newcomers feel like family, and the
								vibe? One part haunted hideout, one part hometown hangout.
							</p>
							<p className="pb-3">
								And if you're feeling brave—or just plain hungry—step into The
								City Morgue, our newly opened full kitchen serving up a
								ghoulishly good menu of horror-themed eats and killer food
								challenges. From brainy bites to monster-sized meals, it's a
								dining experience to die for.
							</p>
							<p className="pb-8">
								The Mulberry Tree Saloon isn’t just a bar—it’s a twisted slice
								of small-town fun where zombies, locals, and legends collide. So
								come thirsty, come hungry, and come ready for a good time.
							</p>
							<p className="font-liquidism2 text-3xl/10">
								You don't have to be dead to enjoy it... <br />
								but it helps.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
