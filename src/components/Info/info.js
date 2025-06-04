import { MapPin, Mail, Clock, Phone, Facebook, Instagram } from 'react-feather';
import noise from '../../images/noise.png';
import { motion } from 'framer-motion';

const Info = () => (
	<section id="info" className="relative scroll-m-8">
		<div
			className="mt-5 bg-[linear-gradient(to_bottom,_#1E3D1E,_#0D1A0D)] bg-blend-overlay bg-opacity-95 shadow-inner"
			style={{
				backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0) 20%),
      linear-gradient(to bottom, #1E3D1E, #0D1A0D),
      url("${noise}")
    `,
			}}
		>
			<div className="flex flex-col items-center py-6 px-8 text-white pb-10">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="font-liquidism2 pb-10 mt-7 font-bold text-[#8B1E1E] text-3xl lg:text-5xl uppercase tracking-widest text-center"
				>
					- Information -
				</motion.h2>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.25 }}
					viewport={{ once: true }}
					className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
				>
					<div className="flex flex-col items-center">
						<div className="w-full">
							<iframe
								className="w-full h-64 lg:h-[30rem] rounded-md shadow-lg"
								title="Google Map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6373.141844684716!2d-93.63045578181291!3d36.99617396565907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf4eda7f665649%3A0xbeb42b2f2611bf8e!2s610%20State%20Hwy%20265%2C%20Marionville%2C%20MO%2065705!5e0!3m2!1sen!2sus!4v1683601716692!5m2!1sen!2sus"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>

						<div className="flex flex-col items-center pt-6 text-center max-w-md">
							<p className="text-lg md:text-xl font-medium mb-4 text-[#F0F7EE]">
								Visit our Facebook or Instagram page for all upcoming events!
							</p>
							<div className="flex justify-center gap-4">
								<a
									href="https://www.facebook.com/profile.php?id=100057060955346"
									target="_blank"
									rel="noreferrer"
								>
									<button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-full text-[#8B1E1E] transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#71C13F]">
										<Facebook size={28} />
									</button>
								</a>
								<a
									href="https://www.instagram.com/mulberrytreesaloon/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-full text-[#C86368] transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#71C13F]">
										<Instagram size={28} />
									</button>
								</a>
							</div>
						</div>
					</div>

					<div className="space-y-10 text-center text-lg sm:text-xl font-medium">
						<div className="space-y-1">
							<MapPin className="text-[#71C13F] mx-auto mb-1" size={24} />
							<p className="text-[#C86368] uppercase font-semibold">Location</p>
							<a
								href="https://maps.app.goo.gl/p4CYDnyUPcvWwQPi7"
								target="_blank"
								rel="noreferrer"
								className="hover:underline decoration-[#71C13F]"
							>
								610 State Hwy 265
								<br />
								Marionville, MO 65705
							</a>
						</div>

						<div className="space-y-1">
							<Phone className="text-[#71C13F] mx-auto mb-1" size={24} />
							<p className="text-[#C86368] uppercase font-semibold">Phone</p>
							<a
								href="tel:4172422034"
								className="hover:underline decoration-[#71C13F]"
							>
								(417) 242-2034
							</a>
						</div>

						<div className="space-y-1">
							<Mail className="text-[#71C13F] mx-auto mb-1" size={24} />
							<p className="text-[#C86368] uppercase font-semibold">Email</p>
							<a
								href="mailto:MulberryMail@yahoo.com"
								className="hover:underline decoration-[#71C13F]"
							>
								MulberryMail@yahoo.com
							</a>
						</div>

						<div className="pt-5 mt-5 border-t border-[#8B1E1E]/40" />

						<div className="space-y-4 text-center max-w-md mx-auto">
							<div className="pb-4">
								<Clock className="text-[#71C13F] mx-auto mb-2" size={24} />
								<p className="text-[#C86368] uppercase font-semibold">
									Hours of Operation
								</p>
							</div>

							<p className="pb-2 font-liquidism2 tracking-wider text-[#F0F7EE]">
								The City Morgue Restaurant
							</p>

							<div className="space-y-2 text-sm md:text-base">
								{[
									{
										day: 'Sun',
										hours: '11:00 AM - 7:00 PM',
										color: '#C86368',
									},
									{ day: 'Mon', hours: 'CLOSED', closed: true },
									{ day: 'Tues', hours: '11:00 AM - 11:00 PM' },
									{ day: 'Wed', hours: '11:00 AM - 11:00 PM' },
									{ day: 'Thurs', hours: '11:00 AM - 11:00 PM' },
									{ day: 'Fri', hours: '11:00 AM - 11:00 PM' },
									{
										day: 'Sat',
										hours: '11:00 AM - 11:00 PM',
										color: '#C86368',
									},
								].map(({ day, hours, color, closed }) => (
									<div key={day} className="flex justify-between">
										<p
											className={`font-medium ${color ? `text-[${color}]` : ''}`}
										>
											{day}
										</p>
										<p
											className={`tracking-wide ${
												closed ? 'font-liquidism2 text-[#8B1E1E]' : ''
											}`}
										>
											{hours}
										</p>
									</div>
								))}
							</div>
							<div className="flex justify-between text-sm md:text-base border-b border-[#71C13F]/40 pb-2"></div>

							<p className="pt-4 tracking-wider text-[#F0F7EE]">
								Mulberry Tree Saloon
							</p>
							<div className="space-y-2 text-sm md:text-base">
								{[
									{
										day: 'Sun',
										hours: '11:00 AM - 12:00 AM',
										color: '#C86368',
									},
									{ day: 'Mon', hours: 'CLOSED', closed: true },
									{ day: 'Tues', hours: '11:00 AM - 1:30 AM' },
									{ day: 'Wed', hours: '11:00 AM - 1:30 AM' },
									{ day: 'Thurs', hours: '11:00 AM - 1:30 AM' },
									{ day: 'Fri', hours: '11:00 AM - 1:30 AM' },
									{
										day: 'Sat',
										hours: '11:00 AM - 1:30 AM',
										color: '#C86368',
									},
								].map(({ day, hours, color, closed }) => (
									<div key={day} className="flex justify-between">
										<p
											className={`font-medium ${color ? `text-[${color}]` : ''}`}
										>
											{day}
										</p>
										<p
											className={`tracking-wide ${
												closed ? 'font-liquidism2 text-[#8B1E1E]' : ''
											}`}
										>
											{hours}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	</section>
);

export default Info;
