import { MapPin, Mail, Clock, Phone, Facebook, Instagram } from 'react-feather';
import { motion } from 'framer-motion';

const Info = () => {
	return (
		<section id="info" className="relative scroll-m-8">
			<div className="mt-5">
				<div className="bg-[#071108] flex flex-col items-center py-3">
					<motion.h2
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="font-liquidism pb-10 mt-7 font-bold text-[#47A025] text-2xl text-center uppercase tracking-widest lg:text-3xl"
					>
						- Information -
					</motion.h2>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.25 }}
						viewport={{ once: true }}
						className="w-full lg:grid grid-cols-2 text-white lg:px-56 lg:text-lg"
					>
						<div className="flex flex-col items-center md:justify-center">
							{/* Google maps image*/}
							<div className="w-2/3">
								<iframe
									className="w-full h-72 lg:h-[30rem]"
									title="test"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6373.141844684716!2d-93.63045578181291!3d36.99617396565907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf4eda7f665649%3A0xbeb42b2f2611bf8e!2s610%20State%20Hwy%20265%2C%20Marionville%2C%20MO%2065705!5e0!3m2!1sen!2sus!4v1683601716692!5m2!1sen!2sus"
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
							<div className="flex flex-col items-center pt-7">
								<div className="text-white text-center font-medium text-xl p-3 lg:text-2xl">
									<p>Visit our Facebook page for all upcoming Events!</p>
								</div>
								<div className="pb-3">
									<a
										className="mr-4"
										href="https://www.facebook.com/profile.php?id=100057060955346"
										target="_blank"
										rel="noreferrer"
									>
										<button className="text-white hover:bg-blue-500 ease-in-out duration-300 rounded-3xl p-3">
											<Facebook size={50} />
										</button>
									</a>
									<a
										href="https://www.instagram.com/mulberrytreesaloon/"
										target="_blank"
										rel="noreferrer"
									>
										<button className="text-white hover:bg-[#DD2A7B] ease-in-out duration-300 rounded-3xl p-3">
											<Instagram size={50} />
										</button>
									</a>
								</div>
							</div>
						</div>

						<div className="lg:flex justify-center lg:w-full">
							{/* contact info */}
							<div className="py-7 font-semibold text-lg lg:text-xl">
								<div className="flex flex-col items-center py-3">
									<div className="flex items-center pb-3">
										<MapPin className="text-[#47A025]" size={20} />
										<p className="pl-2">Location :</p>
									</div>
									<div className="text-center">
										<a
											className="underline md:no-underline md:hover:underline"
											href="https://shorturl.at/aBBmL"
											target="_blank"
											rel="noreferrer"
										>
											610 State Hwy 265
											<br />
											Marionville, MO 65705
										</a>
									</div>
								</div>

								<div className="flex flex-col items-center py-3">
									<div className="flex items-center pb-3">
										<Phone className="text-[#47A025]" size={20} />
										<p className="pl-2">Phone :</p>
									</div>
									<div>
										<a
											className="underline md:no-underline md:hover:underline"
											href="tel:4173669857"
										>
											(417) 366-9857
										</a>
									</div>
								</div>

								<div className="flex flex-col items-center py-3">
									<div className="flex items-center pb-3">
										<Mail className="text-[#47A025]" size={20} />
										<p className="pl-2">Email :</p>
									</div>
									<div>
										<a
											className="underline md:no-underline md:hover:underline"
											href="mailto:MulberryMail@yahoo.com"
										>
											MulberryMail@yahoo.com
										</a>
									</div>
								</div>

								<div className="flex flex-col items-center py-3">
									<div className="flex items-center pb-3">
										<Clock className="text-[#47A025]" size={20} />
										<p className="pl-2">Hours of Operation :</p>
									</div>
									<div className="flex flex-col">
										<div className="pb-3">
											<div className="flex pb-3 items-center justify-center">
												<p>
													The City{' '}
													<span className="font-zomboi text-[#E71D36]">
														Morgue
													</span>{' '}
													Kitchen
												</p>
											</div>

											<div className="flex justify-between pb-2">
												<p className="pr-8">
													<span>Tues</span> -{' '}
													<span className="text-[#E71D36]">Sat</span>
												</p>
												<p>11:00 AM - 11:00 PM</p>
											</div>
										</div>
										<div>
											<div className="flex pb-3 items-center justify-center">
												<p>
													Mulberry{' '}
													<span className="font-liquidism2 text-[#47A025]">
														Tree
													</span>{' '}
													Saloon
												</p>
											</div>
											<div className="flex justify-between pb-2">
												<p className="text-[#47A025] pr-8">Sun</p>
												<p>11:00 AM - 8:00 PM</p>
											</div>
											<div className="flex justify-between pb-2">
												<p>Mon</p>
												<p className="font-liquidism2 tracking-wide text-[#E71D36]">
													CLOSED
												</p>
											</div>
											<div className="flex justify-between pb-2">
												<p>Tues</p>
												<p>11:00 AM - 12:00 AM</p>
											</div>
											<div className="flex justify-between pb-2">
												<p>Wed</p>
												<p>11:00 AM - 12:00 AM</p>
											</div>
											<div className="flex justify-between pb-2">
												<p>Thurs</p>
												<p>11:00 AM - 12:00 AM</p>
											</div>
											<div className="flex justify-between pb-2">
												<p>Fri</p>
												<p>11:00 AM - 1:30 AM</p>
											</div>
											<div className="flex justify-between pb-2">
												<p className="text-[#47A025]">Sat</p>
												<p>11:00 AM - 1:30 AM</p>
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
