import { MapPin, Mail, Clock, Phone, Facebook, Instagram } from 'react-feather';
import noise from '../../images/noise.png';
import { motion } from 'framer-motion';

const Info = () => {
	return (
		<section id="info" className="relative scroll-m-8">
			<div
				className="mt-5 bg-[#1E3D1E] bg-blend-overlay bg-opacity-80 shadow-inner"
				style={{ backgroundImage: `url("${noise}")` }}
			>
				<div className="flex flex-col items-center py-6 px-4">
					<motion.h2
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="font-liquidism2 pb-10 mt-7 font-bold text-[#8B1E1E] text-2xl text-center uppercase tracking-widest lg:text-4xl lg:mt-10"
					>
						- Information -
					</motion.h2>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.25 }}
						viewport={{ once: true }}
						className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 text-white"
					>
						<div className="flex flex-col items-center lg:pt-10">
							<div className="w-full">
								<iframe
									className="w-full h-64 lg:h-[30rem] rounded-md shadow-lg"
									title="Google Map"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6373.141844684716!2d-93.63045578181291!3d36.99617396565907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf4eda7f665649%3A0xbeb42b2f2611bf8e!2s610%20State%20Hwy%20265%2C%20Marionville%2C%20MO%2065705!5e0!3m2!1sen!2sus!4v1683601716692!5m2!1sen!2sus"
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>

							<div className="flex flex-col items-center pt-6 text-center">
								<p className="text-xl font-semibold mb-4">
									Visit our Facebook page for all upcoming Events!
								</p>
								<div className="flex justify-center">
									<a
										href="https://www.facebook.com/profile.php?id=100057060955346"
										target="_blank"
										rel="noreferrer"
										className="mx-2"
									>
										<button className="text-white hover:scale-110 transition-transform duration-300 bg-blue-600 hover:bg-blue-500 rounded-full p-3">
											<Facebook size={36} />
										</button>
									</a>
									<a
										href="https://www.instagram.com/mulberrytreesaloon/"
										target="_blank"
										rel="noreferrer"
										className="mx-2"
									>
										<button className="text-white hover:scale-110 transition-transform duration-300 bg-pink-600 hover:bg-[#DD2A7B] rounded-full p-3">
											<Instagram size={36} />
										</button>
									</a>
								</div>
							</div>
						</div>

						<div className="py-7 font-semibold text-2xl px-4 sm:px-0 space-y-4">
							<div className="space-y-6">
								<div className="text-center">
									<div className="flex justify-center items-center mb-2">
										<MapPin className="text-[#47A025]" size={20} />
										<p className="pl-2">Location :</p>
									</div>
									<a
										href="https://maps.app.goo.gl/p4CYDnyUPcvWwQPi7"
										target="_blank"
										rel="noreferrer"
										className="underline hover:no-underline text-xlg lg:text-2xl"
									>
										610 State Hwy 265
										<br />
										Marionville, MO 65705
									</a>
								</div>

								<div className="text-center">
									<div className="flex justify-center items-center mb-2">
										<Phone className="text-[#47A025]" size={20} />
										<p className="pl-2">Phone :</p>
									</div>
									<a
										href="tel:4173669857"
										className="underline hover:no-underline text-xlg lg:text-2xl"
									>
										(417) 366-9857
									</a>
								</div>

								<div className="text-center">
									<div className="flex justify-center items-center mb-2">
										<Mail className="text-[#47A025]" size={20} />
										<p className="pl-2">Email :</p>
									</div>
									<a
										href="mailto:MulberryMail@yahoo.com"
										className="underline hover:no-underline text-xlg lg:text-2xl"
									>
										MulberryMail@yahoo.com
									</a>
								</div>

								<div className="py-7 font-semibold text-2xl px-4 sm:px-0 space-y-6">
									<div className="flex flex-col items-center">
										<div className="flex items-center pb-3">
											<Clock className="text-[#47A025]" size={24} />
											<p className="pl-2">Hours of Operation :</p>
										</div>

										<div className="w-full max-w-md">
											<div className="pb-4 text-center">
												<p className="pb-2 text-xlg lg:text-2xl">
													The City{' '}
													<span className="font-zomboi text-[#E71D36]">
														Morgue
													</span>{' '}
													Kitchen
												</p>
												<div className="flex justify-between pb-2 text-lg">
													<p className="font-medium">
														Tues - <span className="text-[#E71D36]">Sat</span>
													</p>
													<p className="tracking-wide">11:00 AM - 11:00 PM</p>
												</div>
											</div>

											<div className="pt-5 mt-5 border-t border-[#47A025]/50" />

											<div className="pt-5 text-center text-xlg lg:text-2xl">
												<p className="pb-2">
													Mulberry{' '}
													<span className="font-liquidism2 text-[#47A025]">
														Tree
													</span>{' '}
													Saloon
												</p>
												<div className="space-y-2 text-lg">
													<div className="flex justify-between">
														<p className="text-[#47A025] font-medium">Sun</p>
														<p className="tracking-wide">11:00 AM - 8:00 PM</p>
													</div>
													<div className="flex justify-between">
														<p className="font-medium">Mon</p>
														<p className="font-liquidism2 tracking-wide text-[#E71D36]">
															CLOSED
														</p>
													</div>
													<div className="flex justify-between">
														<p className="font-medium">Tues</p>
														<p className="tracking-wide">11:00 AM - 12:00 AM</p>
													</div>
													<div className="flex justify-between">
														<p className="font-medium">Wed</p>
														<p className="tracking-wide">11:00 AM - 12:00 AM</p>
													</div>
													<div className="flex justify-between">
														<p className="font-medium">Thurs</p>
														<p className="tracking-wide">11:00 AM - 12:00 AM</p>
													</div>
													<div className="flex justify-between">
														<p className="font-medium">Fri</p>
														<p className="tracking-wide">11:00 AM - 1:30 AM</p>
													</div>
													<div className="flex justify-between">
														<p className="text-[#47A025] font-medium">Sat</p>
														<p className="tracking-wide">11:00 AM - 1:30 AM</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Info;
